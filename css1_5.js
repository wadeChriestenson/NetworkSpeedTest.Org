$(document).ready(function() {
    $('#menu').mouseover(function () {
        $('#menu').css({
            'display': 'inline-block',
            'flex-direction': 'column',
            'position': 'absolute',
            // 'background-color': 'whitesmoke',
            'width': '200px',
            'height': '175px',
            'border-radius': '0 0 15px 0',
            'background-color': 'rgba(255, 255, 255, 0.07)',
            'border': '2px solid #221f1f'

        })
        $("#options").css({
            'display': 'flex',
            'flex-direction': 'column',
            'margin-left': '50px'
        })
        $("#ip_info").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'color': 'whitesmoke'
        })
        $("#about_us").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'color': 'whitesmoke'
        })
    }).mouseout(function () {
        $('#menu').css({
            'display': 'inline-block',
            'flex-direction': 'column',
            'background-color': 'whitesmoke',
            'width': '35px',
            'height': '35px',
            'border-radius': '0 0 15px 0',
        })
        $("#options").hide()
        $('#results').show()

    })
    $('#ip_info').mouseover(function () {
        $("#ip_info").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'background-color': '#221F1F',
            'border-radius': '5px',
            'color': 'whitesmoke'
        })
    }).mouseout(function () {
        $("#ip_info").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'background-color': 'rgba(255, 255, 255, 0.00)',
            'border-radius': '5px',
            'color': 'whitesmoke'
        })
    }).click(function () {
        $('#aboutUS').css({
            'display': 'none'
        })
    })
    $('#about_us').mouseover(function () {
        $("#about_us").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'background-color': '#221F1F',
            'border-radius': '5px',
            'color': 'whitesmoke'
        })
    }).mouseout(function () {
        $("#about_us").css({
            'border-bottom': '1px solid skyblue',
            'width': '75px',
            'background-color': 'rgba(255, 255, 255, 0.00)',
            'border-radius': '5px',
            'color': 'whitesmoke'
        })
    }).click(function () {
        $('#aboutUS').css({
            'display': 'flex',
            'flex-direction': 'column',
            'background-size': 'cover',
            'height': '550px',
            'width': '100vw',
            'margin-left': '-10px',
        })
        $('#results').hide()
        $('#about').html('About Us').css({
            'width': '100vw',
            'text-align': 'center',
            'color': 'whitesmoke',
            'font-size': '48px',
            'text-shadow': '1px 1px #221F1F'
        })
        $("#aboutP").html(
            'Our company provides clear and accurate data on you the users Ip address, ' +
            'geo location and download speeds. You may keep our application open at all times ' +
            'to constantly monitor you network. NetworkSpeedTest.Org a quick and free way to keep track ' +
            'of your systems in one easy to understand application.'
        ).css({
            'width': '90vw',
            'text-align': 'center',
            'color': '#221F1F',
            'font-size': '26px',
            'text-shadow': '1px 1px whitesmoke',
            'margin-left': '5%',
            'border-radius': '5px',
            'background-color': 'rgba(255, 255, 255, 0.8)',

        })
    })
})