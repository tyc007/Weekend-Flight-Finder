navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    // Update HTML elements with location information
    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;
    document.getElementById("accuracy").textContent = accuracy;
});