import { useEffect, useRef } from "react";
import "./AudioVisualizer.css";

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioPlayer = audioRef.current;

    const handlePlay = () => {
      const contexteAudio = new (window.AudioContext ||
        window.webkitAudioContext)();
      const src = contexteAudio.createMediaElementSource(audioPlayer);
      const analyseur = contexteAudio.createAnalyser();

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      src.connect(analyseur);
      analyseur.connect(contexteAudio.destination);

      analyseur.fftSize = 1024;
      const frequencesAudio = analyseur.frequencyBinCount;
      const tableauFrequences = new Uint8Array(frequencesAudio);

      const largeurBarre = canvas.width / tableauFrequences.length + 2;
      let hauteurBarre;
      let x;

      function retourneBarres() {
        requestAnimationFrame(retourneBarres);
        x = 0;
        analyseur.getByteFrequencyData(tableauFrequences);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < frequencesAudio; i++) {
          hauteurBarre = tableauFrequences[i];
          ctx.fillStyle = `rgb(250, 50, ${i})`;
          ctx.fillRect(x, canvas.height, largeurBarre, -hauteurBarre);
          x += largeurBarre + 1;
        }
      }

      retourneBarres();
    };

    audioPlayer.addEventListener("play", handlePlay);
    return () => audioPlayer.removeEventListener("play", handlePlay);
  }, []);

  return (
    <div className="audio-visualizer">
      <canvas ref={canvasRef}></canvas>
      <audio
        ref={audioRef}
        controls
        src="son/Rodrigo y Gabriela - Tamacun.mp3"
      />
    </div>
  );
};

export default AudioVisualizer;
