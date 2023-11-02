// hiển thị tất cả sản phẩm
fetch(`http://localhost:3000/products`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let html = "";
        for (const product of data) {
            html += `
            <div class="item">
            <div class="img">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="content">
                <div class="title">${product.title}</div>
                <div class="inner-bottom">
                    <div class="price">${product.price}$</div>
                    <div class="right">Còn lại:
                        <span> ${product.stock}sp</span>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        const box = document.getElementById("box1");
        box.innerHTML = html;
    })
//tạo các nút theo các catrgory
fetch("http://localhost:3000/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let arr = [];
        let html = "";
        for (const product of data) {
            arr.push(product.category);
        }
        let newObj = new Set(arr);
        let newArr = [...newObj];
        for (const item of newArr) {
            html += `
            <button class="item-btn" id="${item}"> ${item}</button>
            `
        }
        const box = document.getElementById("list");
        box.innerHTML = html;
    })

//hiển thị sp khi click vào button category
fetch("http://localhost:3000/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let arr = [];
        let html = "";
        for (const product of data) {
            arr.push(product.category);
        }
        let newObj = new Set(arr);
        let newArr = [...newObj];
        for (const item of newArr) {
            const btnItem = document.getElementById(item);
            btnItem.onclick = () => {
                let content = "";
                fetch(`http://localhost:3000/products?category=${item}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        let content = "";
                        for (const product of data) {
                            content += `
                            <div class="item">
                                <div class="img">
                                    <img src="${product.thumbnail}" alt="">
                                </div>
                                <div class="content">
                                    <div class="title">${product.title}</div>
                                    <div class="inner-bottom">
                                        <div class="price">${product.price}$</div>
                                        <div class="right">Còn lại:
                                            <span> ${product.stock}sp</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                        }
                        const box = document.getElementById("box1");
                        box.innerHTML = content;
                    }
                    )
            }
        }

    })

// hiện danh mục theo tìm kiếm
const inputSearch = document.getElementById("search-inp");
const btnSearch = document.getElementById("search-btn");
btnSearch.onclick = () => {
    const content = inputSearch.value;
    console.log(content);
    fetch(`http://localhost:3000/products?q=${content}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            for (const product of data) {
                html += `
            <div class="item">
            <div class="img">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="content">
                <div class="title">${product.title}</div>
                <div class="inner-bottom">
                    <div class="price">${product.price}$</div>
                    <div class="right">Còn lại:
                        <span> ${product.stock}sp</span>
                    </div>
                </div>
            </div>
        </div>
            `
            }
            const box = document.getElementById("box1");
            box.innerHTML = html;
        })
}

// sắp xếp

const containerBtn = document.getElementById("container");
const boxB = document.getElementById("containerbox");
containerBtn.onclick = () => {
    boxB.classList.add("active");
}
const item1 = document.getElementById("containeritem1");
const item2 = document.getElementById("containeritem2");
const item3 = document.getElementById("containeritem3");
item1.onclick = () => {
    fetch("http://localhost:3000/products")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            for (const product of data) {
                html += `
            <div class="item">
                <div class="img">
                    <img src="${product.thumbnail}" alt="">
                </div>
                <div class="content">
                    <div class="title">${product.title}</div>
                    <div class="inner-bottom">
                        <div class="price">${product.price}$</div>
                        <div class="right">Còn lại:
                            <span> ${product.stock}sp</span>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            const box = document.getElementById("box1");
            box.innerHTML = html;
        })
    item2.classList.toggle("none");
    item3.classList.toggle("none");
}
item3.onclick = () => {
    fetch(`http://localhost:3000/products?_sort=price&_order=desc`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            for (const product of data) {
                html += `
            <div class="item">
                <div class="img">
                    <img src="${product.thumbnail}" alt="">
                </div>
                <div class="content">
                    <div class="title">${product.title}</div>
                    <div class="inner-bottom">
                        <div class="price">${product.price}$</div>
                        <div class="right">Còn lại:
                            <span> ${product.stock}sp</span>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            const box = document.getElementById("box1");
            box.innerHTML = html;
        })
    item2.classList.toggle("none");
    item1.classList.toggle("none");
}

item2.onclick = () => {
    fetch(`http://localhost:3000/products?_sort=price&_order=asc`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            for (const product of data) {
                html += `
            <div class="item">
                <div class="img">
                    <img src="${product.thumbnail}" alt="">
                </div>
                <div class="content">
                    <div class="title">${product.title}</div>
                    <div class="inner-bottom">
                        <div class="price">${product.price}$</div>
                        <div class="right">Còn lại:
                            <span> ${product.stock}sp</span>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            const box = document.getElementById("box1");
            box.innerHTML = html;
        })
    item1.classList.toggle("none");
    item3.classList.toggle("none");
}