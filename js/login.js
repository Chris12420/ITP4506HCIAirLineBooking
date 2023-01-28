$( document ).ready(function() {
    logAuth =  localStorage.getItem('auth');
    if(logAuth == 1) {
        $("#loginEle").html('<li class="menu-item-has-children" id="logoutBtn">\n' +
            '                                <a href="login.html">Sign out</a>\n' +
            '                            </li>');

        $(".sub-menu").html('');
    }


    $( "#loginBtn" ).click(function() {
        localStorage.setItem('auth', 1)
        logAuth =  localStorage.getItem('auth');
        if(logAuth == 1) {
            $("#loginEle").html('<li class="menu-item-has-children">\n' +
                '                                <a href="login.html">Sign out</a>\n' +
                '                            </li>');
            location.href = './index.html';
        }
    });

    $( "#logoutBtn" ).click(function() {
        localStorage.setItem('auth', 0)
        logAuth =  localStorage.getItem('auth');
        if(logAuth == 0) {
            $("#loginEle").html('<li class="menu-item-has-children" id="loginEle">\n' +
                '                                <a href="login.html">Log In</a>\n' +
                '                                <ul class="sub-menu">\n' +
                '                                    <li><a href="login.html">Log In</a></li>\n' +
                '                                    <li><a href="register.html">Register</a></li>\n' +
                '                                </ul>\n' +
                '                            </li>');

            location.href = './index.html';
        }
    });
});