const winMan = {};

winMan.download = function(link, filename) {
    fetch(link)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    );
};

winMan.new = function(link, arg, name) {
    if (!link) {console.error("No link specified.");}else{
        if (!name) {name=window.location.href};
        if (!arg) {arg="width=600,height=400,resizable=yes"};
        window.open(link, name, arg);
    };
};

winMan.open = function(link, type, arg, name) {
    if (!type) {window.open(link)};
    if (type=="new") {if (arg=="temp") {window.open(link)}else{var winTemp;winTemp = window.open(link)};}
    if (type=="change") {window.location.href = link};
    if (type=="cd") {window.location.href = link};
    if (type=="NewPopup") {winMan.new(link, arg, name)};
    if (type=="np") {winMan.new(link, arg, name)};
};

winMan.close = function(arg) {
    if (!arg) {
        window.close();
    }else{
        if (!winTemp) {console.error("No temp windows/tabs.")}else{winTemp.close();}
    }
}