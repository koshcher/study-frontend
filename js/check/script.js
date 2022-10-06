class CheckItem {
    _count;
    _name;
    _price;

    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }

    set name(value) {
        if(typeof(value) == 'string') {
            this._name = value;
        }
    }

    set count(value) {
        if(typeof(value) == 'number') {
            this._count = value;
        }
    }

    // price for 1 item
    set price(value) {
        if(typeof(value) == 'number') {
            this._price = value;
        }
    }


    get name() { return this._name };
    get count() { return this._count };
    get price() { return this._price };
    get fullPrice() {return this._price * this._count};
}

class DatabaseService {
    add(checkItem) {
        localStorage.setItem(
            checkItem.name, JSON.stringify
            ({
                count: checkItem.count,
                price: checkItem.price
            })
        );
    }

    increaseCount(item) {
        localStorage.setItem(
            item.name, JSON.stringify
            ({
                count: item.count + 1,
                price: item.price
            })
        );
    }

    decreaseCount(item) {
        if(item.count > 1) {
            localStorage.setItem(
                item.name, JSON.stringify
                ({
                    count: item.count - 1,
                    price: item.price
                })
            );
        }
    }

    delete(itemName) {
        localStorage.removeItem(`${itemName}`);
    }

    get list() {
        let resList = [];
        let keys = Object.keys(localStorage);
        for (let i = 0; i < keys.length; i++) {
            let info = JSON.parse(window.localStorage.getItem(keys[i]));
            resList.push(new CheckItem(keys[i], info.count, info.price));
        }
        return resList;
    }

    get sum() {
        let sum = 0;
        let list = this.list;
        for (let i = 0; i < list.length; i++) {
            sum += list[i].fullPrice;
        }
        return sum;
    }
}

class App {
    constructor() {
        this.db = new DatabaseService();
    }

    buildList() {
        let checkListUl =  document.getElementById('checkList');
        let list = this.db.list;

        let output = '';
        for (let i = 0; i < list.length; i++) {
            output += 
            `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <h5 class="mb-0">${list[i].name}</h5>
                <div>
                <div class="btn-group-vertical btn-group-sm">
                    <button class="btn btn-success" id="upBtn${i}"><i class="bi bi-caret-up-fill"></i></button>
                    <button class="btn btn-danger" id="downBtn${i}"><i class="bi bi-caret-down-fill"></i></button>
                </div>
                x ${list[i].count}
                </div>
                <h6>${list[i].fullPrice}$</h6>
                <button typ class="btn btn-dark" id="deleteBtn${i}">delete</button>
            </li>
            `;
        }
        checkListUl.innerHTML += output;

        for (let i = 0; i < list.length; i++) {
            let upBtn = document.getElementById(`upBtn${i}`);
            upBtn.addEventListener('click', () => {
                this.db.increaseCount(list[i]);
            });
            let downBtn = document.getElementById(`downBtn${i}`);
            downBtn.addEventListener('click', () => {
                this.db.decreaseCount(list[i]);
            });
            let deleteBtn = document.getElementById(`deleteBtn${i}`);
            deleteBtn.addEventListener('click', () => {
                this.db.delete(list[i].name);
            });
        }
    }

    buildAddForm() {
        var addForm = document.forms.add;
        addForm.addEventListener('submit', () => {
            if(addForm.elements['text'].value == '') {
                alert("Item can not be empty");
            } else {
                let fields = addForm.elements['text'].value.split(':');
                if(fields.length == 3) {
                    this.db.add(new CheckItem(fields[0], Number(fields[1]), Number(fields[2])));
                } 
            }
        });
    }

    buildTotal() {
        let sum = this.db.sum;
        //document.getElementById("container").innerHTML +=`<hr><h3 style="text-align: center;">Total: ${sum}$</h3>`;
        document.write(`<h3 style="text-align: center;">Total: ${sum}$</h3>`);
    }

    build() {
        this.buildAddForm();
        this.buildList();
        this.buildTotal();
    }
}

let app = new App();
app.build();