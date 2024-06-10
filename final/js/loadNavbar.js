document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            const currentpage = window.location.pathname.split("/").pop()
            switch(currentpage) {
                case "contact.html":
                    document.getElementById('nav_contact').classList.add('active');
                    break;
                case "index.html":
                    document.getElementById('nav_index').classList.add('active');
                    break;
                case "interests.html":
                    document.getElementById('nav_interests').classList.add('active');
                    break;
                case "classes.html":
                    document.getElementById('nav_classes').classList.add('active');
                    break;
                case "dance.html":
                    document.getElementById('nav_dance').classList.add('active');
                    break;

            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});

