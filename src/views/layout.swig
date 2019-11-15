<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/bulma.min.css">
    <title>Express by Swig</title>
</head>
<body>
    <h1>Express.js App</h1>
    <hr />

    <section class="section">
        <div class="container">
        {% block content %}
        {% endblock %}
        </div>
    </section>
    
</body>
</html>