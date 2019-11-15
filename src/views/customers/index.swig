{% extends "../layout.swig" %}

{% block content %}
    <h1 class="title">Customer Page</h1>
    {% for c in customers %}
        <p>Firstname: {{ c.firstName }} - Lastname: {{ c.lastName }}</p>
    {% endfor %}
{% endblock %}