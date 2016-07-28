var prompt = '<div class="prompt">riju@riju-ThinkPad-L450:/$</div>';
var cursor = '<div class="cursor"></div>';


var ls_l = [
    'drwxr-xr-x&nbsp;&nbsp;2&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;27&nbsp;09:39&nbsp;backups',
    'drwxr-xr-x&nbsp;21&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;23&nbsp;15:12&nbsp;cache',
    'drwxrwsrwt&nbsp;&nbsp;2&nbsp;root&nbsp;whoopsie&nbsp;4096&nbsp;Jul&nbsp;26&nbsp;21:50&nbsp;crash',
    'drwxr-xr-x&nbsp;75&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;27&nbsp;23:38&nbsp;lib',
    'drwxrwsr-x&nbsp;&nbsp;2&nbsp;root&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Apr&nbsp;13&nbsp;01:44&nbsp;local',
    'lrwxrwxrwx&nbsp;&nbsp;1&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;Jul&nbsp;12&nbsp;04:01&nbsp;lock&nbsp;->&nbsp;/run/lock',
    'drwxrwxr-x&nbsp;19&nbsp;root&nbsp;syslog&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;27&nbsp;23:38&nbsp;log',
    'drwxrwsr-x&nbsp;&nbsp;2&nbsp;root&nbsp;mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Apr&nbsp;21&nbsp;03:37&nbsp;mail',
    'drwxrwsrwt&nbsp;&nbsp;2&nbsp;root&nbsp;whoopsie&nbsp;4096&nbsp;Apr&nbsp;21&nbsp;03:44&nbsp;metrics',
    'drwxr-xr-x&nbsp;&nbsp;2&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Apr&nbsp;21&nbsp;03:37&nbsp;opt',
    'lrwxrwxrwx&nbsp;&nbsp;1&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;Jul&nbsp;12&nbsp;04:01&nbsp;run&nbsp;->&nbsp;/run',
    'drwxr-xr-x&nbsp;&nbsp;2&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Apr&nbsp;19&nbsp;20:01&nbsp;snap',
    'drwxr-xr-x&nbsp;&nbsp;8&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;22&nbsp;01:27&nbsp;spool',
    'drwxrwxrwt&nbsp;11&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;28&nbsp;00:19&nbsp;tmp',
    'drwxr-xr-x&nbsp;&nbsp;3&nbsp;root&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4096&nbsp;Jul&nbsp;13&nbsp;03:49&nbsp;www',
];

var getUrl = [
    'Get:18&nbsp;http://downloads-distro.mongodb.org/repo/ubuntu-upstart&nbsp;dist&nbsp;Release&nbsp;[2,040&nbsp;B]',
    'Get:19&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/main&nbsp;amd64&nbsp;Packages&nbsp;[123&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:20&nbsp;http://downloads-distro.mongodb.org/repo/ubuntu-upstart&nbsp;dist&nbsp;Release.gpg&nbsp;[490&nbsp;B]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:21&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/main&nbsp;i386&nbsp;Packages&nbsp;[120&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:22&nbsp;http://in.archive.ubuntu.com/ubuntu&nbsp;xenial-updates/main&nbsp;i386&nbsp;Packages&nbsp;[324&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:23&nbsp;http://downloads-distro.mongodb.org/repo/ubuntu-upstart&nbsp;dist/10gen&nbsp;amd64&nbsp;Packages&nbsp;[29.8&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:24&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/main&nbsp;amd64&nbsp;DEP-11&nbsp;Metadata&nbsp;[43.9&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:25&nbsp;http://downloads-distro.mongodb.org/repo/ubuntu-upstart&nbsp;dist/10gen&nbsp;i386&nbsp;Packages&nbsp;[29.6&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:26&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/main&nbsp;DEP-11&nbsp;64x64&nbsp;Icons&nbsp;[50.8&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:27&nbsp;http://in.archive.ubuntu.com/ubuntu&nbsp;xenial-updates/main&nbsp;amd64&nbsp;DEP-11&nbsp;Metadata&nbsp;[192&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:28&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/universe&nbsp;amd64&nbsp;Packages&nbsp;[36.4&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:29&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/universe&nbsp;i386&nbsp;Packages&nbsp;[36.4&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:30&nbsp;http://security.ubuntu.com/ubuntu&nbsp;xenial-security/universe&nbsp;amd64&nbsp;DEP-11&nbsp;Metadata&nbsp;[2,329&nbsp;B]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:31&nbsp;http://in.archive.ubuntu.com/ubuntu&nbsp;xenial-updates/main&nbsp;DEP-11&nbsp;64x64&nbsp;Icons&nbsp;[155&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:32&nbsp;http://in.archive.ubuntu.com/ubuntu&nbsp;xenial-updates/universe&nbsp;amd64&nbsp;Packages&nbsp;[300&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Get:33&nbsp;http://in.archive.ubuntu.com/ubuntu&nbsp;xenial-updates/universe&nbsp;i386&nbsp;Packages&nbsp;[297&nbsp;kB]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
];

function getPrompt() {
    $('#main_container').append(prompt);
}

function getCursor() {
    $('div.prompt').append(cursor);
}

function getlsl(time_interval) {

    $('div.prompt').append(' ls -l');

    var ctr = 0;
    var idInterval = setInterval(function () {

        var random = Math.floor(Math.random() * ls_l.length);
        console.log(random);
        $('div.prompt').append('<br>' + ls_l[random]);
        $('#focus_here').focus();
    }, time_interval);

    // getPrompt();
}