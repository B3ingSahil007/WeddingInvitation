import React, { useEffect, useRef } from 'react';

// Enchanting Falling Rose Petals and Fresh Green Leaves Animation
// Emanating gently from the top-left corner across the screen
export default function FallingPetals({ active = true, density = 32 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic rose petals and leaves
    const particles = [];
    const colors = [
      { r: 247, g: 198, b: 204, a: 0.85 }, // soft blush pink
      { r: 236, g: 168, b: 180, a: 0.8 },  // petal rose
      { r: 255, g: 228, b: 232, a: 0.9 },  // pale petal
      { r: 212, g: 140, b: 156, a: 0.75 }, // warm rose
      { r: 150, g: 180, b: 140, a: 0.7 },  // soft sage leaf green
      { r: 120, g: 155, b: 110, a: 0.65 }, // fresh olive leaf
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        // Bias origin towards top-left as requested by user
        if (init) {
          this.x = Math.random() * width * 0.8 - width * 0.1;
          this.y = Math.random() * height * 0.8 - height * 0.2;
        } else {
          // New particles spawn near top and top-left
          this.x = Math.random() * (width * 0.5) - width * 0.1;
          this.y = -20 - Math.random() * 50;
        }

        this.size = Math.random() * 12 + 10;
        this.speedX = Math.random() * 1.6 + 0.8; // drifting rightwards from top-left
        this.speedY = Math.random() * 1.8 + 1.1; // falling down
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.035;
        this.flutterSpeed = Math.random() * 0.04 + 0.015;
        this.flutterPhase = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.isLeaf = Math.random() > 0.72; // ~28% leaves, 72% petals
        this.flip = Math.random();
        this.flipSpeed = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.x += this.speedX + Math.sin(this.flutterPhase) * 1.2;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        this.flutterPhase += this.flutterSpeed;
        this.flip += this.flipSpeed;

        // Reset when goes off screen
        if (this.y > height + 40 || this.x > width + 40) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        const flipScale = Math.sin(this.flip);
        ctx.scale(1, Math.max(0.15, Math.abs(flipScale)));

        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
        ctx.beginPath();

        if (this.isLeaf) {
          // Draw leaf shape
          ctx.moveTo(0, -this.size);
          ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.3, this.size * 0.6, this.size * 0.6, 0, this.size);
          ctx.bezierCurveTo(-this.size * 0.6, this.size * 0.6, -this.size * 0.8, -this.size * 0.3, 0, -this.size);
        } else {
          // Draw elegant curved petal shape
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size * 0.6, -this.size * 0.4, -this.size * 0.7, this.size * 0.7, 0, this.size);
          ctx.bezierCurveTo(this.size * 0.7, this.size * 0.7, this.size * 0.6, -this.size * 0.4, 0, 0);
        }

        ctx.fill();

        // Delicate spine vein for leaf or petal highlight
        ctx.strokeStyle = `rgba(255, 255, 255, 0.35)`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.6);
        ctx.lineTo(0, this.size * 0.6);
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < density; i++) {
      particles.push(new Particle());
    }

    let lastTime = 0;
    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active, density]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
