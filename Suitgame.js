function mainSuit(nama, pilihan, aturan) {
    let kamu = prompt("Suit " + nama + "\nPilih: " + pilihan.join(", "));
    let komputer = pilihan[Math.floor(Math.random() * pilihan.length)];

    if (!pilihan.includes(kamu)) {
        alert("Apa yang kau masukkan ini woi?");
    } else if (kamu === komputer) {
        alert("kamu: " + kamu + "\nKomputer: " + komputer + "\nKelen Seri T_T");
    } else if (aturan[kamu] === komputer) {
        alert("kamu: " + kamu + "\nKomputer: " + komputer + "\nGG Kamu Menang >.<");
    } else {
        alert("kamu: " + kamu + "\nKomputer: " + komputer + "\nYahaha Cupu Kau Kalah :v");
    }
}

function batuGuntingKertas() {
    mainSuit("Batu Gunting Kertas", ["batu", "gunting", "kertas"],
        { batu: "gunting", gunting: "kertas", kertas: "batu" });
    }

function gajahOrangSemut() {
    mainSuit("Gajah Orang Semut", ["gajah", "orang", "semut"],
        {gajah: "orang", orang: "semut", semut: "gajah"});
    }

function jari() {
    mainSuit("Jari", ["telunjuk", "jempol", "kelingking"],
        {telunjuk: "jempol", jempol: "kelingking", kelingking: "telunjuk"});
}
