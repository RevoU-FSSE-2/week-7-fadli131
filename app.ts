const namaAndaInput = document.getElementById('namaAnda') as HTMLInputElement;
const namaItemInput = document.getElementById('namaItem') as HTMLInputElement;
const HargaItem = document.getElementById('hargaItem') as HTMLInputElement;
const tambahItemBtn = document.getElementById('tambahSembako') as HTMLButtonElement;
const ItemList = document.getElementById('ItemList') as HTMLUListElement;


interface Item {
    name: string;
    name: string;
    value: number;
}

const lists: Item[] = [];


function displayItem() {
    ItemList.innerHTML = '';

    lists.forEach((data, index) => {
        const li = document.createElement('li');
        li.innerText = `${index}. ${data.name} - ${data.nama} - Rp. ${data.value}`;
        ItemList.appendChild(li);
    });
}

tambahItemBtn.addEventListener('click', () => {
 
    const namaAnda = NamaAndaInput.value;
    const namaItem = NamaItemInput.value;
    const hargaItem = Number(HargaItemInput.value);

    
    if (namaAnda && namaItem && hargaItem) {
        
        const newItem: Item = {
            name: namaAnda,
            name: namaItem,
            value: hargaItem,
        };

      
        lists.push(newItem);

        
        displayItem();
        namaAndaInput.value = '';
        namaItemInput.value = '';
        hargaItemInput.value = '';
    } 
    
    else {
        alert("Nama semua bidang harus terisi");
    }
});
