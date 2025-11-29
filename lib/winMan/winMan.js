const winMan = {};

winMan.link = function(link, action, arg1, arg2) {
    if (action == open) {
        window.open(link);
        return;
    };
    if (!action) {winMan.link(link, open)}

    if (action == openPopup)  {
        if (!arg1) {
            window.open(link, "_blank", "width=600,height=400");
        } else {
            size = "width=", arg1, ",height=", arg2
            window.open(link, "_blank", size);
        }
        window.open(link, "_blank", arg1/*width ex: "width=600,height=400" */);
    }

    if (action == download) {
        fetch(link)
        .then(response => response.blob())
        .then(blob => 
            {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = arg1;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
        );
    };
};
