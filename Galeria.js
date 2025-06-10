<script>
window.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('miVideo');
  video.muted = false;
  video.play().catch(() => {
    // Si el navegador bloquea el autoplay con audio, puedes mostrar un botón para iniciar el video manualmente
  });
});
</script>