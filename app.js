
function kay() {
    let grid1 = document.getElementById('d1');
    let cook = document.getElementById('cook');
    let para = document.getElementById('para');


    grid1.addEventListener('mouseover', () => {
        cook.style.color = 'white'
        cook.style.transform = 'translateY(-40px)'
        cook.style.transition = 'all 0.6s ease-in-out'
        grid1.style.background = 'linear-gradient(to top right, #491717, #241b14)'
        para.style.opacity = '1'
        para.style.transition = 'all 0.6s ease-in-out'
        para.style.transform = 'translateY(-40px)'


        grid1.addEventListener('mouseleave', () => {
            cook.style.transform = 'translateY(0px)'
            cook.style.transition = 'all 0.6s ease-in-out'
            grid1.style.background = 'linear-gradient(to top right, #f84242, #ffb573)'
            para.style.opacity = '0'
            para.style.transform = 'translateY(0px)'
        })
    })

    let grid2 = document.getElementById('d2');
    let cook1 = document.getElementById('cook1');
    let para1 = document.getElementById('para1');

    grid2.addEventListener('mouseover', () => {
        cook1.style.color = 'white'
        cook1.style.transform = 'translateY(-40px)'
        cook1.style.transition = 'all 0.6s ease-in-out'
        grid2.style.background = 'linear-gradient(to top right, #144b55, #17473f)'
        para1.style.opacity = '1'
        para1.style.transition = 'all 0.6s ease-in-out'
        para1.style.transform = 'translateY(-40px)'


        grid2.addEventListener('mouseleave', () => {
            cook1.style.transform = 'translateY(0px)'
            cook1.style.transition = 'all 0.6s ease-in-out'
            grid2.style.background = 'linear-gradient(to top right, #36a7bc, #153f3773)'
            para1.style.opacity = '0'
            para1.style.transform = 'translateY(0px)'
        })
    })

    let grid3 = document.getElementById('d3');
    let cook2 = document.getElementById('cook2');
    let para2 = document.getElementById('para2');

    grid3.addEventListener('mouseover', () => {
        cook2.style.color = 'white'
        cook2.style.transform = 'translateY(-40px)'
        cook2.style.transition = 'all 0.6s ease-in-out'
        grid3.style.background = 'linear-gradient(to top right, #473321, #494723)'
        para2.style.opacity = '1'
        para2.style.transition = 'all 0.6s ease-in-out'
        para2.style.transform = 'translateY(-40px)'


        grid3.addEventListener('mouseleave', () => {
            cook2.style.transform = 'translateY(0px)'
            cook2.style.transition = 'all 0.6s ease-in-out'
            grid3.style.background = 'linear-gradient(to top right, #ffb573, #fff779)'
            para2.style.opacity = '0'
            para2.style.transform = 'translateY(0px)'
        })
    })

    let grid4 = document.getElementById('d4');
    let cook3 = document.getElementById('cook3');
    let para3 = document.getElementById('para3');

    grid4.addEventListener('mouseover', () => {
        cook3.style.color = 'white'
        cook3.style.transform = 'translateY(-60px)'
        cook3.style.transition = 'all 0.5s ease-in-out'
        grid4.style.background = 'linear-gradient(to top right, #00534e, #0e4732)'
        para3.style.opacity = '1'
        para3.style.transition = 'all 0.6s ease-in-out'
        para3.style.transform = 'translateY(-60px)'


        grid4.addEventListener('mouseleave', () => {
            cook3.style.transform = 'translateY(0px)'
            cook3.style.transition = 'all 0.6s ease-in-out'
            grid4.style.background = 'linear-gradient(to top right, #00dacd, #31f4ad)'
            para3.style.opacity = '0'
            para3.style.transform = 'translateY(0px)'
        })
    })

    let grid5 = document.getElementById('d5');
    let cook4 = document.getElementById('cook4');
    let para4 = document.getElementById('para4');

    grid5.addEventListener('mouseover', () => {
        cook4.style.color = 'white'
        cook4.style.transform = 'translateY(-40px)'
        cook4.style.transition = 'all 0.5s ease-in-out'
        grid5.style.background = 'linear-gradient(to top right, #1e0f27, #1f1738)'
        para4.style.opacity = '1'
        para4.style.transition = 'all 0.6s ease-in-out'
        para4.style.transform = 'translateY(-40px)'


        grid5.addEventListener('mouseleave', () => {
            cook4.style.transform = 'translateY(0px)'
            cook4.style.transition = 'all 0.6s ease-in-out'
            grid5.style.background = 'linear-gradient(to top right, #c560ff, #8a66ff)'
            para4.style.opacity = '0'
            para4.style.transform = 'translateY(0px)'
        })
    })

    let grid6 = document.getElementById('d6');
    let cook5 = document.getElementById('cook5');
    let para5 = document.getElementById('para5');

    grid6.addEventListener('mouseover', () => {
        cook5.style.color = 'white'
        cook5.style.transform = 'translateY(-40px)'
        cook5.style.transition = 'all 0.5s ease-in-out'
        grid6.style.background = 'linear-gradient(to top right, #002b2e, #161d3a)'
        para5.style.opacity = '1'
        para5.style.transition = 'all 0.6s ease-in-out'
        para5.style.transform = 'translateY(-40px)'


        grid6.addEventListener('mouseleave', () => {
            cook5.style.transform = 'translateY(0px)'
            cook5.style.transition = 'all 0.6s ease-in-out'
            grid6.style.background = 'linear-gradient(to top right, #00cdda, #6683ff)'
            para5.style.opacity = '0'
            para5.style.transform = 'translateY(0px)'
        })
    })
}

kay();


function h1() {
    let food = document.getElementById('h1');
    let foodName = document.getElementById('h11');
    let foodDesc = document.getElementById('h12');

    food.addEventListener('mouseover', () => {
        foodName.style.transform = 'translateY(-40px)'
        foodDesc.style.opacity = '1'
        foodDesc.style.transform = 'translateY(-40px)'
        foodName.style.transition = 'all 0.6s ease-in-out'
        food.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.8)),url(icecream.jpg)'



        food.addEventListener('mouseleave', () => {
            foodName.style.transform = 'translateY(40px)'
            foodDesc.style.opacity = '0'
            foodDesc.style.transform = 'translateY(40px)'
            foodName.style.transition = 'all 0.6s ease-in-out'
            food.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0, 0.4)),url(icecream.jpg)'
        })
    })

    let food2 = document.getElementById('h2');
    let foodName2 = document.getElementById('h21');
    let foodDesc2 = document.getElementById('h22');

    food2.addEventListener('mouseover', () => {
        foodName2.style.transform = 'translateY(-40px)'
        foodDesc2.style.opacity = '1'
        foodDesc2.style.transform = 'translateY(-40px)'
        foodName2.style.transition = 'all 0.6s ease-in-out'
        food2.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.8)), url(snacks.jpg)'



        food2.addEventListener('mouseleave', () => {
            foodName2.style.transform = 'translateY(40px)'
            foodDesc2.style.opacity = '0'
            foodDesc2.style.transform = 'translateY(40px)'
            foodName2.style.transition = 'all 0.6s ease-in-out'
            food2.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url(snacks.jpg)'
        })
    })

    let food3 = document.getElementById('h3');
    let foodName3 = document.getElementById('h31');
    let foodDesc3 = document.getElementById('h32');

    food3.addEventListener('mouseover', () => {
        foodName3.style.transform = 'translateY(-40px)'
        foodDesc3.style.opacity = '1'
        foodDesc3.style.transform = 'translateY(-40px)'
        foodName3.style.transition = 'all 0.6s ease-in-out'
        food3.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.8)), url(cake1.jpg)'



        food3.addEventListener('mouseleave', () => {
            foodName3.style.transform = 'translateY(40px)'
            foodDesc3.style.opacity = '0'
            foodDesc3.style.transform = 'translateY(40px)'
            foodName3.style.transition = 'all 0.6s ease-in-out'
            food3.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url(cake4.jpg)'
        })
    })

    let food4 = document.getElementById('h4');
    let foodName4 = document.getElementById('h41');
    let foodDesc4 = document.getElementById('h42');

    food4.addEventListener('mouseover', () => {
        foodName4.style.transform = 'translateY(-40px)'
        foodDesc4.style.opacity = '1'
        foodDesc4.style.transform = 'translateY(-40px)'
        foodName4.style.transition = 'all 0.6s ease-in-out'
        food4.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.8)), url(chineserice.jpg)'



        food4.addEventListener('mouseleave', () => {
            foodName4.style.transform = 'translateY(40px)'
            foodDesc4.style.opacity = '0'
            foodDesc4.style.transform = 'translateY(40px)'
            foodName4.style.transition = 'all 0.6s ease-in-out'
            food4.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url(chineserice.jpg)'
        })
    })

    let food5 = document.getElementById('h5');
    let foodName5 = document.getElementById('h51');
    let foodDesc5 = document.getElementById('h52');

    food5.addEventListener('mouseover', () => {
        foodName5.style.transform = 'translateY(-40px)'
        foodDesc5.style.opacity = '1'
        foodDesc5.style.transform = 'translateY(-40px)'
        foodName5.style.transition = 'all 0.6s ease-in-out'
        food5.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.8)), url(chinese-rice.jpg)'



        food5.addEventListener('mouseleave', () => {
            foodName5.style.transform = 'translateY(40px)'
            foodDesc5.style.opacity = '0'
            foodDesc5.style.transform = 'translateY(40px)'
            foodName5.style.transition = 'all 0.6s ease-in-out'
            food5.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url(chinese-rice.jpg)'
        })
    })

    let food6 = document.getElementById('h6');
    let foodName6 = document.getElementById('h61');
    let foodDesc6 = document.getElementById('h62');

    food6.addEventListener('mouseover', () => {
        foodName6.style.transform = 'translateY(-40px)'
        foodDesc6.style.opacity = '1'
        foodDesc6.style.transform = 'translateY(-40px)'
        foodName6.style.transition = 'all 0.6s ease-in-out'
        food6.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.8)), url(bbq1.jpg)'



        food6.addEventListener('mouseleave', () => {
            foodName6.style.transform = 'translateY(40px)'
            foodDesc6.style.opacity = '0'
            foodDesc6.style.transform = 'translateY(40px)'
            foodName6.style.transition = 'all 0.6s ease-in-out'
            food6.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url(bbq.jpg)'
        })
    })

}

h1();



