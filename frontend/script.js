document.getElementById("convertBtn").addEventListener("click", async () => {
  const playlist = document.getElementById("playlist").value.trim();
  const status = document.getElementById("status");

  if (!playlist) {
    status.textContent = "Please paste your Desmus playlist first.";
    return;
  }

  status.textContent = "Converter backend coming soon...";

  // This will eventually send the playlist to the server
  // and return YouTube links automatically.
});
