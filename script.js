document.getElementById('output').style.visibility = 'hidden';

document.getElementById('uangInput').addEventListener('input', function(e){

	// cek input kosong atau tidak
	if(e.target.value == ''){
		document.getElementById('output').style.visibility = 'hidden';
	} else{
		document.getElementById('output').style.visibility = 'visible';
	}

	// ambil mataUang option
	let mataUang = document.getElementById('mataUang').value;

	let uang = e.target.value;

	if(uang < 0) {
		uang = undefined;
	}

	function convert(mataUang1, mataUang2, mataUang3, nilai1, nilai2, nilai3) {
		// ubah output caption bedasarkan uang option yg terseleksi
		document.querySelector('.caption-1').innerHTML = mataUang1;
		document.querySelector('.caption-2').innerHTML = mataUang2;
		document.querySelector('.caption-3').innerHTML = mataUang3;

		// aritmatik
		document.getElementById('output-1').innerHTML = uang * nilai1;
		document.getElementById('output-2').innerHTML = uang * nilai2;
		document.getElementById('output-3').innerHTML = uang * nilai3;
	}

	if(mataUang == 'rupiah') {
		convert('US Dollar :', 'Ringgit : ','Yen :', 0.000071, 0.0003, 0.0077);
	} else if (mataUang == 'dollar') {
		convert('Rupiah :', 'Ringgit : ','Yen :', 14127.5, 4.19, 108.41);
	} else if (mataUang == 'ringgit') {
		convert('Rupiah :', 'US Dollar : ','Yen :', 3386.98, 0.24, 25.89);
	} else if (mataUang == 'yen') {
		convert('Rupiah :', 'US Dollar : ','Ringgit :', 130.42, 0.0092, 0.039);
	}
});