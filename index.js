addressBox = document.getElementById("input-address");
addressButton = document.getElementById("button-copy-address");

function minecraftCopy() {
    navigator.clipboard.writeText(addressBox.value);
    addressBox.style.backgroundColor = "lightgreen";
    addressBox.style.color = "green";
    addressButton.innerHTML = "Copied! Have fun!";
}

$('body').on('hidden.bs.modal', '.modal', function() {
    // for some reason this doesn't work outside of a setTimeout, even if the delay is 0
    setTimeout(() => {
        $('.btn').blur();
    }, 1);
});
