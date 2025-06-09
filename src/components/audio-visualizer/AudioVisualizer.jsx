import { useEffect, useRef } from "react";
import musique from "./assets/son/RodrigoyGabriela-Tamacun.mp3";
import "./audioVisualizer.css";

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const analyserRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const setupAudioContext = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
        sourceRef.current =
          audioContextRef.current.createMediaElementSource(audio);
        analyserRef.current = audioContextRef.current.createAnalyser();

        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        analyserRef.current.fftSize = 1024;
      }
    };

    const renderBars = () => {
      const analyser = analyserRef.current;
      if (!analyser) return;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = canvas.width / bufferLength;

      const draw = () => {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#0D1117";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i];
          ctx.fillStyle = `rgb(250, 50, ${i})`;
          ctx.fillRect(x, canvas.height, barWidth, -barHeight);
          x += barWidth + 1.5;
        }
      };

      draw();
    };

    const handlePlay = () => {
      setupAudioContext();
      renderBars();
    };

    audio.addEventListener("play", handlePlay);

    const handleKeydown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      audio.removeEventListener("play", handlePlay);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="audio-visualizer">
      <canvas ref={canvasRef}></canvas>
      <audio ref={audioRef} controls src={musique} />
    </div>
  );
};

export default AudioVisualizer;
