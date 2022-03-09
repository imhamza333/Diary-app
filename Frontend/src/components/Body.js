import React from 'react'

function Body() {
    return (
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <a href="{% url 'add' %}">Add new entry</a>
                </div>
            </div>
        </article>

    )
}

export default Body;
