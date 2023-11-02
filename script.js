let a = 1;
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const page = document.getElementById("page");
page.innerHTML = a;
// hiển thị tất cả sản phẩm
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
fetch(`http://localhost:3000/products?_page=${a}&_limit=6`)
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
btnLeft.onclick = () => {
    fetch(`http://localhost:3000/products?_page=${a -= 1}&_limit=6`)
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
            page.innerHTML = a;
        })
}

btnRight.onclick = () => {
    fetch(`http://localhost:3000/products?_page=${a += 1}&_limit=6`)
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
            page.innerHTML = a;
        })
}
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
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
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
                a = 1;

                fetch(`http://localhost:3000/products?_page=${a}&_limit=6&category=${item}`)
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
                btnLeft.onclick = () => {
                    fetch(`http://localhost:3000/products?_page=${a -= 1}&_limit=6&category=${item}`)
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
                            page.innerHTML = a;
                        })
                }

                btnRight.onclick = () => {
                    fetch(`http://localhost:3000/products?_page=${a += 1}&_limit=6&category=${item}`)
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
                            page.innerHTML = a;
                        })
                }
            }
        }

    })
//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================
// hiện danh mục theo tìm kiếm
const inputSearch = document.getElementById("search-inp");
const btnSearch = document.getElementById("search-btn");
btnSearch.onclick = () => {
    const content = inputSearch.value;
    console.log(content);
    a = 1;
    page.innerHTML = a;

    fetch(`http://localhost:3000/products?_page=${a}&_limit=6&q=${content}`)
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
    btnLeft.onclick = () => {
        fetch(`http://localhost:3000/products?_page=${a -= 1}&_limit=6&q=${content}`)
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
                page.innerHTML = a;
            })
    }

    btnRight.onclick = () => {
        fetch(`http://localhost:3000/products?_page=${a += 1}&_limit=6&q=${content}`)
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
                page.innerHTML = a;
            })
    }
}
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
// sắp xếp


//mặc định
const containerBtn = document.getElementById("container");
const boxB = document.getElementById("containerbox");
containerBtn.onclick = () => {
    boxB.classList.add("active");
}
const item1 = document.getElementById("containeritem1");
const item2 = document.getElementById("containeritem2");
const item3 = document.getElementById("containeritem3");
item1.onclick = () => {
    a = 1;
    page.innerHTML = a;
    fetch(`http://localhost:3000/products?_page=${a}&_limit=6`)
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
    btnLeft.onclick = () => {
        fetch(`http://localhost:3000/products?_page=${a -= 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }

    btnRight.onclick = () => {
        fetch(`http://localhost:3000/products?_page=${a += 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }
    item2.classList.toggle("none");
    item3.classList.toggle("none");
}
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
// DESC
item3.onclick = () => {
    a = 1;
    page.innerHTML = a;
    fetch(`http://localhost:3000/products?_sort=price&_order=desc&_page=${a}&_limit=6`)
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
    btnLeft.onclick = () => {
        fetch(`http://localhost:3000/products?_sort=price&_order=desc&_page=${a -= 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }

    btnRight.onclick = () => {
        fetch(`http://localhost:3000/products?_sort=price&_order=desc&_page=${a += 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }
    item2.classList.toggle("none");
    item1.classList.toggle("none");
}
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
// ASC

item2.onclick = () => {
    a = 1;
    page.innerHTML = a;
    fetch(`http://localhost:3000/products?_sort=price&_order=asc&_page=${a}&_limit=6`)
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
    btnLeft.onclick = () => {
        fetch(`http://localhost:3000/products?_sort=price&_order=asc&_page=${a -= 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }

    btnRight.onclick = () => {
        fetch(`http://localhost:3000/products?_sort=price&_order=asc&_page=${a += 1}&_limit=6`)
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
                page.innerHTML = a;
            })
    }
    item1.classList.toggle("none");
    item3.classList.toggle("none");
}