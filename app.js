var NamaAndaInput = document.getElementById('namaAnda');
var NamaItemInput = document.getElementById('namaItem');
var HargaItemInput = document.getElementById('hargaItem');
var tambahItemBtn = document.getElementById('tambahItem');
var sembakoList = document.getElementById('ItemList');

var lists = [];

function displayItem() {
    
    ItemList.innerHTML = '';
   
    lists.forEach(function (data, index) {
        var li = document.createElement('li');
        li.innerText = data.name1 + " - " + data.name2 + " - Rp. " + data.value;
        ItemList.appendChild(li);
    });
}

tambahItemBtn.addEventListener('click', function () {
    
    var namaAnda = NamaAndaInput.value;
    var namaItem = NamaItemInput.value;
    var hargaItem = Number(HargaItemInput.value);
    
    if (namaAnda && namaItem && hargaItem) {
        
        var newItem = {
            name1: namaAnda,
            name2: namaItem,
            value: hargaItem
        };
        
        lists.push(newItem);
        
        displayItem();
        
        NamaAndaInput.value = '';
        NamaItemInput.value = '';
        HargaItemInput.value = '';
    }
    else {
        alert("Nama semua bidang harus terisi");
    }
});