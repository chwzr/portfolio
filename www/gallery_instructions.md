# Slideshows und Bildergalerien

````
<!-- BEGIN Slideshow X -->

<div class="div-slideshow">
    {{#section SECTION_NAME multiple=true sortable=true}}
        {{IMAGE_NAME type=image class="slide"}}
    {{/section}}

    <input type="button" id="input-open-gallery-X" class="input-open-gallery" data-gallery="X" data-image="X">
    <label for="input-open-gallery-X"></label>
</div>

<!-- END Slideshow X -->

<!-- BEGIN Image Gallery X -->

<div id="div-gallery-X" class="div-gallery">
    <input type="button" id="input-close-gallery-X" class="input-close-gallery">
    <label class="label-input-close-gallery" for="input-close-gallery-X"></label>
    <input type="button" id="input-prev-image-X" class="input-prev-image">
    <label class="label-input-prev-image" for="input-prev-image-X">
        <svg xmlns="https://www.w3.org/2000/svg" width="28px" height="36px">
            <path d="M28,0 L 0,18 L 28,36"></path>
        </svg>
    </label>
    <input type="button" id="input-next-image-X" class="input-next-image">
    <label class="label-input-next-image" for="input-next-image-X">
        <svg xmlns="https://www.w3.org/2000/svg" width="28px" height="36px">
            <path d="M0,0 L 28,18 L 0,36"></path>
        </svg>
    </label>
    <ul>
        {{#section SECTION_NAME multiple=true sortable=true}}
        <li>
            {{IMAGE_NAME type=image}}
        </li>
        {{/section}}
    </ul>
</div>

<!-- END Image Gallery X -->
````

````
<div class="colorbox">
    {{IMAGE_NAME type=image}}
    <div>
        <h2>{{TITLE_NAME}}</h2>
        <p>{{SUBTITLE_NAME}}</p>
    </div>
    <input type="button" id="input-open-gallery-{{id}}" class="input-open-gallery" data-gallery="X" data-image="{{id}}">
    <label for="input-open-gallery-{{id}}"></label>
</div>
````
