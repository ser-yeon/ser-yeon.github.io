export function offset() {

    /* || mobile状态下的menu */
    // 获取相关 DOM 元素
    
    const subCheckboxs = document.querySelectorAll(".sub-checkbox");    

    // 为复选框添加点击事件监听器
    subCheckboxs.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
                const targetElement = checkbox.parentElement.nextElementSibling;
                const parentElement = checkbox.parentElement;
        
                if (targetElement) {
                    if (checkbox.checked) {
                        const featuresHeight = parentElement.querySelector("ul");
                        // 确保目标元素存在
                        if (!featuresHeight || !checkbox) {
                            console.error("Required DOM elements not found.");
                            return;
                        }
                        // 获取 features-lists 的高度并加上单位
                        let height1 = featuresHeight.offsetHeight + "px";
                        // 如果复选框被选中，设置 marginTop
                        targetElement.style.marginTop = height1;
                    } else {
                        // 如果复选框未选中，重置 marginTop
                        targetElement.style.marginTop = "0px";
                    }
                } else {
                    console.warn("Target element not found.");
                }
            }
            
        });
    })
    /* -- */

    /* || resize */
    window.addEventListener("resize", () => {
        subCheckboxs.forEach((checkbox) => {
            checkbox.checked = false;
            //把mobile状态下的margin消除
            const targetElement = checkbox.parentElement.nextElementSibling;
            targetElement.style.marginTop = "0px";
        })


        const hamburger = document.querySelector("#hamburger");

        hamburger.checked = false;
        })

    /* 
    //desktop状态下hover打开sub-lists
    subCheckboxs.forEach((checkbox) => {
        if (window.innerWidth > 1024 || window.innerWidth === 1024) {
            //获取label元素
            let label = checkbox.nextElementSibling;
            label.addEventListener("mouseover", () => {
                label.nextElementSibling.style.display = "block";
            })

            label.addEventListener("mouseout", () => {
                label.nextElementSibling.style.display = "none";
            })
        }
        
    })
   */
    
}

