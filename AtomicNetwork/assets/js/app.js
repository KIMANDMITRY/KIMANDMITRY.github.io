/* -----------------------------------------------
 /* Author : Vincent Garreau  - vincentgarreau.com
 /* MIT license: http://opensource.org/licenses/MIT
 /* Demo / Generator : vincentgarreau.com/particles.js
 /* GitHub : github.com/VincentGarreau/particles.js
 /* How to use? : Check the GitHub README
 /* v2.0.0
 /* ----------------------------------------------- */

var pJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

    /* particles.js variables with default values */
    this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#fff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ff0000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab:{
                    distance: 100,
                    line_linked:{
                        opacity: 1
                    }
                },
                bubble:{
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse:{
                    distance: 200,
                    duration: 0.4
                },
                push:{
                    particles_nb: 4
                },
                remove:{
                    particles_nb: 2
                }
            },
            mouse:{}
        },
        retina_detect: false,
        fn: {
            interact: {},
            modes: {},
            vendors:{}
        },
        tmp: {}
    };

    var pJS = this.pJS;

    /* params settings */
    if(params){
        Object.deepExtend(pJS, params);
    }

    pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };


    pJS.fn.retinaInit = function(){

        if(pJS.retina_detect && window.devicePixelRatio > 1){
            pJS.canvas.pxratio = window.devicePixelRatio;
            pJS.tmp.retina = true;
        }
        else{
            pJS.canvas.pxratio = 1;
            pJS.tmp.retina = false;
        }

        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

    };



    /* ---------- pJS functions - canvas ------------ */

    pJS.fn.canvasInit = function(){
        pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    };

    pJS.fn.canvasSize = function(){

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        if(pJS && pJS.interactivity.events.resize){

            window.addEventListener('resize', function(){

                pJS.canvas.w = pJS.canvas.el.offsetWidth;
                pJS.canvas.h = pJS.canvas.el.offsetHeight;

                /* resize canvas */
                if(pJS.tmp.retina){
                    pJS.canvas.w *= pJS.canvas.pxratio;
                    pJS.canvas.h *= pJS.canvas.pxratio;
                }

                pJS.canvas.el.width = pJS.canvas.w;
                pJS.canvas.el.height = pJS.canvas.h;

                /* repaint canvas on anim disabled */
                if(!pJS.particles.move.enable){
                    pJS.fn.particlesEmpty();
                    pJS.fn.particlesCreate();
                    pJS.fn.particlesDraw();
                    pJS.fn.vendors.densityAutoParticles();
                }

                /* density particles enabled */
                pJS.fn.vendors.densityAutoParticles();

            });

        }

    };


    pJS.fn.canvasPaint = function(){
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };

    pJS.fn.canvasClear = function(){
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };


    /* --------- pJS functions - particles ----------- */

    pJS.fn.particle = function(color, opacity, position){

        /* size */
        this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if(pJS.particles.size.anim.enable){
            this.size_status = false;
            this.vs = pJS.particles.size.anim.speed / 100;
            if(!pJS.particles.size.anim.sync){
                this.vs = this.vs * Math.random();
            }
        }

        /* position */
        this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;

        /* check position  - into the canvas */
        if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
        else if(this.x < this.radius*2) this.x = this.x + this.radius;
        if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
        else if(this.y < this.radius*2) this.y = this.y + this.radius;

        /* check position - avoid overlap */
        if(pJS.particles.move.bounce){
            pJS.fn.vendors.checkOverlap(this, position);
        }

        /* color */
        this.color = {};
        if(typeof(color.value) == 'object'){

            if(color.value instanceof Array){
                var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
                this.color.rgb = hexToRgb(color_selected);
            }else{
                if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
                    this.color.rgb = {
                        r: color.value.r,
                        g: color.value.g,
                        b: color.value.b
                    }
                }
                if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
                    this.color.hsl = {
                        h: color.value.h,
                        s: color.value.s,
                        l: color.value.l
                    }
                }
            }

        }
        else if(color.value == 'random'){
            this.color.rgb = {
                r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
                g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
                b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
            }
        }
        else if(typeof(color.value) == 'string'){
            this.color = color;
            this.color.rgb = hexToRgb(this.color.value);
        }

        /* opacity */
        this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if(pJS.particles.opacity.anim.enable){
            this.opacity_status = false;
            this.vo = pJS.particles.opacity.anim.speed / 100;
            if(!pJS.particles.opacity.anim.sync){
                this.vo = this.vo * Math.random();
            }
        }

        /* animation - velocity for speed */
        var velbase = {}
        switch(pJS.particles.move.direction){
            case 'top':
                velbase = { x:0, y:-1 };
                break;
            case 'top-right':
                velbase = { x:0.5, y:-0.5 };
                break;
            case 'right':
                velbase = { x:1, y:-0 };
                break;
            case 'bottom-right':
                velbase = { x:0.5, y:0.5 };
                break;
            case 'bottom':
                velbase = { x:0, y:1 };
                break;
            case 'bottom-left':
                velbase = { x:-0.5, y:1 };
                break;
            case 'left':
                velbase = { x:-1, y:0 };
                break;
            case 'top-left':
                velbase = { x:-0.5, y:-0.5 };
                break;
            default:
                velbase = { x:0, y:0 };
                break;
        }

        if(pJS.particles.move.straight){
            this.vx = velbase.x;
            this.vy = velbase.y;
            if(pJS.particles.move.random){
                this.vx = this.vx * (Math.random());
                this.vy = this.vy * (Math.random());
            }
        }else{
            this.vx = velbase.x + Math.random()-0.5;
            this.vy = velbase.y + Math.random()-0.5;
        }

        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);

        this.vx_i = this.vx;
        this.vy_i = this.vy;



        /* if shape is image */

        var shape_type = pJS.particles.shape.type;
        if(typeof(shape_type) == 'object'){
            if(shape_type instanceof Array){
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        }else{
            this.shape = shape_type;
        }

        if(this.shape == 'image'){
            var sh = pJS.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            }
            if(!this.img.ratio) this.img.ratio = 1;
            if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
                pJS.fn.vendors.createSvgImg(this);
                if(pJS.tmp.pushing){
                    this.img.loaded = false;
                }
            }
        }



    };


    pJS.fn.particle.prototype.draw = function() {

        var p = this;

        if(p.radius_bubble != undefined){
            var radius = p.radius_bubble;
        }else{
            var radius = p.radius;
        }

        if(p.opacity_bubble != undefined){
            var opacity = p.opacity_bubble;
        }else{
            var opacity = p.opacity;
        }

        if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
        }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
        }

        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();

        switch(p.shape){

            case 'circle':
                pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                break;

            case 'edge':
                pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
                break;

            case 'triangle':
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
                break;

            case 'polygon':
                pJS.fn.vendors.drawShape(
                    pJS.canvas.ctx,
                    p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
                    p.y - radius / (2.66/3.5), // startY
                    radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
                    pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
                    1 // sideCountDenominator
                );
                break;

            case 'star':
                pJS.fn.vendors.drawShape(
                    pJS.canvas.ctx,
                    p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
                    p.y - radius / (2*2.66/3.5), // startY
                    radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
                    pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
                    2 // sideCountDenominator
                );
                break;

            case 'image':

            function draw(){
                pJS.canvas.ctx.drawImage(
                    img_obj,
                    p.x-radius,
                    p.y-radius,
                    radius*2,
                    radius*2 / p.img.ratio
                );
            }

                if(pJS.tmp.img_type == 'svg'){
                    var img_obj = p.img.obj;
                }else{
                    var img_obj = pJS.tmp.img_obj;
                }

                if(img_obj){
                    draw();
                }

                break;

        }

        pJS.canvas.ctx.closePath();

        if(pJS.particles.shape.stroke.width > 0){
            pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
            pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
            pJS.canvas.ctx.stroke();
        }

        pJS.canvas.ctx.fill();

    };


    pJS.fn.particlesCreate = function(){
        for(var i = 0; i < pJS.particles.number.value; i++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
        }
    };

    pJS.fn.particlesUpdate = function(){

        for(var i = 0; i < pJS.particles.array.length; i++){

            /* the particle */
            var p = pJS.particles.array[i];

            // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
            // var f = -BANG_SIZE / d;
            // if ( d < BANG_SIZE ) {
            //     var t = Math.atan2( dy, dx );
            //     p.vx = f * Math.cos(t);
            //     p.vy = f * Math.sin(t);
            // }

            /* move the particle */
            if(pJS.particles.move.enable){
                var ms = pJS.particles.move.speed/2;
                p.x += p.vx * ms;
                p.y += p.vy * ms;
            }

            /* change opacity status */
            if(pJS.particles.opacity.anim.enable) {
                if(p.opacity_status == true) {
                    if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
                    p.opacity += p.vo;
                }else {
                    if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
                    p.opacity -= p.vo;
                }
                if(p.opacity < 0) p.opacity = 0;
            }

            /* change size */
            if(pJS.particles.size.anim.enable){
                if(p.size_status == true){
                    if(p.radius >= pJS.particles.size.value) p.size_status = false;
                    p.radius += p.vs;
                }else{
                    if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
                    p.radius -= p.vs;
                }
                if(p.radius < 0) p.radius = 0;
            }

            /* change particle position if it is out of canvas */
            if(pJS.particles.move.out_mode == 'bounce'){
                var new_pos = {
                    x_left: p.radius,
                    x_right:  pJS.canvas.w,
                    y_top: p.radius,
                    y_bottom: pJS.canvas.h
                }
            }else{
                var new_pos = {
                    x_left: -p.radius,
                    x_right: pJS.canvas.w + p.radius,
                    y_top: -p.radius,
                    y_bottom: pJS.canvas.h + p.radius
                }
            }

            if(p.x - p.radius > pJS.canvas.w){
                p.x = new_pos.x_left;
                p.y = Math.random() * pJS.canvas.h;
            }
            else if(p.x + p.radius < 0){
                p.x = new_pos.x_right;
                p.y = Math.random() * pJS.canvas.h;
            }
            if(p.y - p.radius > pJS.canvas.h){
                p.y = new_pos.y_top;
                p.x = Math.random() * pJS.canvas.w;
            }
            else if(p.y + p.radius < 0){
                p.y = new_pos.y_bottom;
                p.x = Math.random() * pJS.canvas.w;
            }

            /* out of canvas modes */
            switch(pJS.particles.move.out_mode){
                case 'bounce':
                    if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                    else if (p.x - p.radius < 0) p.vx = -p.vx;
                    if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                    else if (p.y - p.radius < 0) p.vy = -p.vy;
                    break;
            }

            /* events */
            if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
                pJS.fn.modes.grabParticle(p);
            }

            if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
                pJS.fn.modes.bubbleParticle(p);
            }

            if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
                pJS.fn.modes.repulseParticle(p);
            }

            /* interaction auto between particles */
            if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
                for(var j = i + 1; j < pJS.particles.array.length; j++){
                    var p2 = pJS.particles.array[j];

                    /* link particles */
                    if(pJS.particles.line_linked.enable){
                        pJS.fn.interact.linkParticles(p,p2);
                    }

                    /* attract particles */
                    if(pJS.particles.move.attract.enable){
                        pJS.fn.interact.attractParticles(p,p2);
                    }

                    /* bounce particles */
                    if(pJS.particles.move.bounce){
                        pJS.fn.interact.bounceParticles(p,p2);
                    }

                }
            }


        }

    };

    pJS.fn.particlesDraw = function(){

        /* clear canvas */
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

        /* update each particles param */
        pJS.fn.particlesUpdate();

        /* draw each particle */
        for(var i = 0; i < pJS.particles.array.length; i++){
            var p = pJS.particles.array[i];
            p.draw();
        }

    };

    pJS.fn.particlesEmpty = function(){
        pJS.particles.array = [];
    };

    pJS.fn.particlesRefresh = function(){

        /* init all */
        cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();

        /* restart */
        pJS.fn.vendors.start();

    };


    /* ---------- pJS functions - particles interaction ------------ */

    pJS.fn.interact.linkParticles = function(p1, p2){

        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);

        /* draw a line between p1 and p2 if the distance between them is under the config distance */
        if(dist <= pJS.particles.line_linked.distance){

            var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

            if(opacity_line > 0){

                /* style */
                var color_line = pJS.particles.line_linked.color_rgb_line;
                pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
                pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

                /* path */
                pJS.canvas.ctx.beginPath();
                pJS.canvas.ctx.moveTo(p1.x, p1.y);
                pJS.canvas.ctx.lineTo(p2.x, p2.y);
                pJS.canvas.ctx.stroke();
                pJS.canvas.ctx.closePath();

            }

        }

    };


    pJS.fn.interact.attractParticles  = function(p1, p2){

        /* condensed particles */
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);

        if(dist <= pJS.particles.line_linked.distance){

            var ax = dx/(pJS.particles.move.attract.rotateX*1000),
                ay = dy/(pJS.particles.move.attract.rotateY*1000);

            p1.vx -= ax;
            p1.vy -= ay;

            p2.vx += ax;
            p2.vy += ay;

        }


    }


    pJS.fn.interact.bounceParticles = function(p1, p2){

        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy),
            dist_p = p1.radius+p2.radius;

        if(dist <= dist_p){
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;

            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }

    }


    /* ---------- pJS functions - modes events ------------ */

    pJS.fn.modes.pushParticles = function(nb, pos){

        pJS.tmp.pushing = true;

        for(var i = 0; i < nb; i++){
            pJS.particles.array.push(
                new pJS.fn.particle(
                    pJS.particles.color,
                    pJS.particles.opacity.value,
                    {
                        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
                    }
                )
            )
            if(i == nb-1){
                if(!pJS.particles.move.enable){
                    pJS.fn.particlesDraw();
                }
                pJS.tmp.pushing = false;
            }
        }

    };


    pJS.fn.modes.removeParticles = function(nb){

        pJS.particles.array.splice(0, nb);
        if(!pJS.particles.move.enable){
            pJS.fn.particlesDraw();
        }

    };


    pJS.fn.modes.bubbleParticle = function(p){

        /* on hover event */
        if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
                ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

            function init(){
                p.opacity_bubble = p.opacity;
                p.radius_bubble = p.radius;
            }

            /* mousemove - check ratio */
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

                if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){

                    /* size */
                    if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

                        if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
                            var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
                            if(size >= 0){
                                p.radius_bubble = size;
                            }
                        }else{
                            var dif = p.radius - pJS.interactivity.modes.bubble.size,
                                size = p.radius - (dif*ratio);
                            if(size > 0){
                                p.radius_bubble = size;
                            }else{
                                p.radius_bubble = 0;
                            }
                        }

                    }

                    /* opacity */
                    if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

                        if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
                            var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
                            if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                                p.opacity_bubble = opacity;
                            }
                        }else{
                            var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
                            if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                                p.opacity_bubble = opacity;
                            }
                        }

                    }

                }

            }else{
                init();
            }


            /* mouseleave */
            if(pJS.interactivity.status == 'mouseleave'){
                init();
            }

        }

        /* on click event */
        else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


            if(pJS.tmp.bubble_clicking){
                var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
                    dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
                    dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
                    time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

                if(time_spent > pJS.interactivity.modes.bubble.duration){
                    pJS.tmp.bubble_duration_end = true;
                }

                if(time_spent > pJS.interactivity.modes.bubble.duration*2){
                    pJS.tmp.bubble_clicking = false;
                    pJS.tmp.bubble_duration_end = false;
                }
            }


            function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

                if(bubble_param != particles_param){

                    if(!pJS.tmp.bubble_duration_end){
                        if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
                            if(p_obj_bubble != undefined) var obj = p_obj_bubble;
                            else var obj = p_obj;
                            if(obj != bubble_param){
                                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                                if(id == 'size') p.radius_bubble = value;
                                if(id == 'opacity') p.opacity_bubble = value;
                            }
                        }else{
                            if(id == 'size') p.radius_bubble = undefined;
                            if(id == 'opacity') p.opacity_bubble = undefined;
                        }
                    }else{
                        if(p_obj_bubble != undefined){
                            var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                                dif = bubble_param - value_tmp;
                            value = bubble_param + dif;
                            if(id == 'size') p.radius_bubble = value;
                            if(id == 'opacity') p.opacity_bubble = value;
                        }
                    }

                }

            }

            if(pJS.tmp.bubble_clicking){
                /* size */
                process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
                /* opacity */
                process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
            }

        }

    };


    pJS.fn.modes.repulseParticle = function(p){

        if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

            var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
                repulseRadius = pJS.interactivity.modes.repulse.distance,
                velocity = 100,
                repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);

            var pos = {
                x: p.x + normVec.x * repulseFactor,
                y: p.y + normVec.y * repulseFactor
            }

            if(pJS.particles.move.out_mode == 'bounce'){
                if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
                if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
            }else{
                p.x = pos.x;
                p.y = pos.y;
            }

        }


        else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

            if(!pJS.tmp.repulse_finish){
                pJS.tmp.repulse_count++;
                if(pJS.tmp.repulse_count == pJS.particles.array.length){
                    pJS.tmp.repulse_finish = true;
                }
            }

            if(pJS.tmp.repulse_clicking){

                var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

                var dx = pJS.interactivity.mouse.click_pos_x - p.x,
                    dy = pJS.interactivity.mouse.click_pos_y - p.y,
                    d = dx*dx + dy*dy;

                var force = -repulseRadius / d * 1;

                function process(){

                    var f = Math.atan2(dy,dx);
                    p.vx = force * Math.cos(f);
                    p.vy = force * Math.sin(f);

                    if(pJS.particles.move.out_mode == 'bounce'){
                        var pos = {
                            x: p.x + p.vx,
                            y: p.y + p.vy
                        }
                        if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                        else if (pos.x - p.radius < 0) p.vx = -p.vx;
                        if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                        else if (pos.y - p.radius < 0) p.vy = -p.vy;
                    }

                }

                // default
                if(d <= repulseRadius){
                    process();
                }

                // bang - slow motion mode
                // if(!pJS.tmp.repulse_finish){
                //   if(d <= repulseRadius){
                //     process();
                //   }
                // }else{
                //   process();
                // }


            }else{

                if(pJS.tmp.repulse_clicking == false){

                    p.vx = p.vx_i;
                    p.vy = p.vy_i;

                }

            }

        }

    }


    pJS.fn.modes.grabParticle = function(p){

        if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

            /* draw a line between the cursor and the particle if the distance between them is under the config distance */
            if(dist_mouse <= pJS.interactivity.modes.grab.distance){

                var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

                if(opacity_line > 0){

                    /* style */
                    var color_line = pJS.particles.line_linked.color_rgb_line;
                    pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
                    pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                    //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

                    /* path */
                    pJS.canvas.ctx.beginPath();
                    pJS.canvas.ctx.moveTo(p.x, p.y);
                    pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
                    pJS.canvas.ctx.stroke();
                    pJS.canvas.ctx.closePath();

                }

            }

        }

    };



    /* ---------- pJS functions - vendors ------------ */

    pJS.fn.vendors.eventsListeners = function(){

        /* events target element */
        if(pJS.interactivity.detect_on == 'window'){
            pJS.interactivity.el = window;
        }else{
            pJS.interactivity.el = pJS.canvas.el;
        }


        /* detect mouse pos - on hover / click event */
        if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

            /* el on mousemove */
            pJS.interactivity.el.addEventListener('mousemove', function(e){

                if(pJS.interactivity.el == window){
                    var pos_x = e.clientX,
                        pos_y = e.clientY;
                }
                else{
                    var pos_x = e.offsetX || e.clientX,
                        pos_y = e.offsetY || e.clientY;
                }

                pJS.interactivity.mouse.pos_x = pos_x;
                pJS.interactivity.mouse.pos_y = pos_y;

                if(pJS.tmp.retina){
                    pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
                    pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
                }

                pJS.interactivity.status = 'mousemove';

            });

            /* el on onmouseleave */
            pJS.interactivity.el.addEventListener('mouseleave', function(e){

                pJS.interactivity.mouse.pos_x = null;
                pJS.interactivity.mouse.pos_y = null;
                pJS.interactivity.status = 'mouseleave';

            });

        }

        /* on click event */
        if(pJS.interactivity.events.onclick.enable){

            pJS.interactivity.el.addEventListener('click', function(){

                pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
                pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
                pJS.interactivity.mouse.click_time = new Date().getTime();

                if(pJS.interactivity.events.onclick.enable){

                    switch(pJS.interactivity.events.onclick.mode){

                        case 'push':
                            if(pJS.particles.move.enable){
                                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                            }else{
                                if(pJS.interactivity.modes.push.particles_nb == 1){
                                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                                }
                                else if(pJS.interactivity.modes.push.particles_nb > 1){
                                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                                }
                            }
                            break;

                        case 'remove':
                            pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                            break;

                        case 'bubble':
                            pJS.tmp.bubble_clicking = true;
                            break;

                        case 'repulse':
                            pJS.tmp.repulse_clicking = true;
                            pJS.tmp.repulse_count = 0;
                            pJS.tmp.repulse_finish = false;
                            setTimeout(function(){
                                pJS.tmp.repulse_clicking = false;
                            }, pJS.interactivity.modes.repulse.duration*1000)
                            break;

                    }

                }

            });

        }


    };

    pJS.fn.vendors.densityAutoParticles = function(){

        if(pJS.particles.number.density.enable){

            /* calc area */
            var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
            if(pJS.tmp.retina){
                area = area/(pJS.canvas.pxratio*2);
            }

            /* calc number of particles based on density area */
            var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

            /* add or remove X particles */
            var missing_particles = pJS.particles.array.length - nb_particles;
            if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
            else pJS.fn.modes.removeParticles(missing_particles);

        }

    };


    pJS.fn.vendors.checkOverlap = function(p1, position){
        for(var i = 0; i < pJS.particles.array.length; i++){
            var p2 = pJS.particles.array[i];

            var dx = p1.x - p2.x,
                dy = p1.y - p2.y,
                dist = Math.sqrt(dx*dx + dy*dy);

            if(dist <= p1.radius + p2.radius){
                p1.x = position ? position.x : Math.random() * pJS.canvas.w;
                p1.y = position ? position.y : Math.random() * pJS.canvas.h;
                pJS.fn.vendors.checkOverlap(p1);
            }
        }
    };


    pJS.fn.vendors.createSvgImg = function(p){

        /* set color to svg element */
        var svgXml = pJS.tmp.source_svg,
            rgbHex = /#([0-9A-F]{3,6})/gi,
            coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
                if(p.color.rgb){
                    var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
                }else{
                    var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
                }
                return color_value;
            });

        /* prepare to create img with colored svg */
        var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
            DOMURL = window.URL || window.webkitURL || window,
            url = DOMURL.createObjectURL(svg);

        /* create particle img obj */
        var img = new Image();
        img.addEventListener('load', function(){
            p.img.obj = img;
            p.img.loaded = true;
            DOMURL.revokeObjectURL(url);
            pJS.tmp.count_svg++;
        });
        img.src = url;

    };


    pJS.fn.vendors.destroypJS = function(){
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
    };


    pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0,0);
        for (var i = 0; i < sideCount; i++) {
            c.lineTo(sideLength,0);
            c.translate(sideLength,0);
            c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();

    };

    pJS.fn.vendors.exportImg = function(){
        window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
    };


    pJS.fn.vendors.loadImg = function(type){

        pJS.tmp.img_error = undefined;

        if(pJS.particles.shape.image.src != ''){

            if(type == 'svg'){

                var xhr = new XMLHttpRequest();
                xhr.open('GET', pJS.particles.shape.image.src);
                xhr.onreadystatechange = function (data) {
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            pJS.tmp.source_svg = data.currentTarget.response;
                            pJS.fn.vendors.checkBeforeDraw();
                        }else{
                            console.log('Error pJS - Image not found');
                            pJS.tmp.img_error = true;
                        }
                    }
                }
                xhr.send();

            }else{

                var img = new Image();
                img.addEventListener('load', function(){
                    pJS.tmp.img_obj = img;
                    pJS.fn.vendors.checkBeforeDraw();
                });
                img.src = pJS.particles.shape.image.src;

            }

        }else{
            console.log('Error pJS - No image.src');
            pJS.tmp.img_error = true;
        }

    };


    pJS.fn.vendors.draw = function(){

        if(pJS.particles.shape.type == 'image'){

            if(pJS.tmp.img_type == 'svg'){

                if(pJS.tmp.count_svg >= pJS.particles.number.value){
                    pJS.fn.particlesDraw();
                    if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }else{
                    //console.log('still loading...');
                    if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }

            }else{

                if(pJS.tmp.img_obj != undefined){
                    pJS.fn.particlesDraw();
                    if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }else{
                    if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }

            }

        }else{
            pJS.fn.particlesDraw();
            if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

    };


    pJS.fn.vendors.checkBeforeDraw = function(){

        // if shape is image
        if(pJS.particles.shape.type == 'image'){

            if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
                pJS.tmp.checkAnimFrame = requestAnimFrame(check);
            }else{
                //console.log('images loaded! cancel check');
                cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
                if(!pJS.tmp.img_error){
                    pJS.fn.vendors.init();
                    pJS.fn.vendors.draw();
                }

            }

        }else{
            pJS.fn.vendors.init();
            pJS.fn.vendors.draw();
        }

    };


    pJS.fn.vendors.init = function(){

        /* init canvas + particles */
        pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();

        /* particles.line_linked - convert hex colors to rgb */
        pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

    };


    pJS.fn.vendors.start = function(){

        if(isInArray('image', pJS.particles.shape.type)){
            pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
            pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        }else{
            pJS.fn.vendors.checkBeforeDraw();
        }

    };




    /* ---------- pJS - start ------------ */


    pJS.fn.vendors.eventsListeners();

    pJS.fn.vendors.start();



};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
    for (var property in source) {
        if (source[property] && source[property].constructor &&
            source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            arguments.callee(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame         ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame    ||
        window.oCancelRequestAnimationFrame      ||
        window.msCancelRequestAnimationFrame     ||
        clearTimeout
} )();

function hexToRgb(hex){
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
};

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

    //console.log(params);

    /* no string id? so it's object params, and set the id with default id */
    if(typeof(tag_id) != 'string'){
        params = tag_id;
        tag_id = 'particles-js';
    }

    /* no id? set the id to default id */
    if(!tag_id){
        tag_id = 'particles-js';
    }

    /* pJS elements */
    var pJS_tag = document.getElementById(tag_id),
        pJS_canvas_class = 'particles-js-canvas-el',
        exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

    /* remove canvas if exists into the pJS target tag */
    if(exist_canvas.length){
        while(exist_canvas.length > 0){
            pJS_tag.removeChild(exist_canvas[0]);
        }
    }

    /* create canvas element */
    var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;

    /* set size canvas */
    canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";

    /* append canvas */
    var canvas = document.getElementById(tag_id).appendChild(canvas_el);

    /* launch particle.js */
    if(canvas != null){
        pJSDom.push(new pJS(tag_id, params));
    }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

    /* load json config */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function (data) {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var params = JSON.parse(data.currentTarget.response);
                window.particlesJS(tag_id, params);
                if(callback) callback();
            }else{
                console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
                console.log('Error pJS - File config not found');
            }
        }
    };
    xhr.send();

};
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/
 Version: 1.8.1
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<div aria-label="Previous" class="slick-prev"> <div class="slick-prev__icon"> <div class="fa fa-angle-left"></div> </div> <div class="slick-prev__text">Previous</div> </div>',
                nextArrow: '<div aria-label="Next" class="slick-next"> <div class="slick-next__text">Next</div> <div class="slick-next__icon"> <div class="fa fa-angle-right"></div> </div> </div>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

                event.stopImmediatePropagation();
                var $sf = $(this);

                setTimeout(function() {

                    if( _.options.pauseOnFocus ) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }

                }, 0);

            });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return (val >= 0) && (val < _.slideCount);
            });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({'tabindex': '0'});
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if( $.type( arguments[0] ) === 'object' ) {

                option =  arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ( $.type( arguments[0] ) === 'string' ) {

                option =  arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                    type = 'responsive';

                } else if ( typeof arguments[1] !== 'undefined' ) {

                    type = 'single';

                }

            }

            if ( type === 'single' ) {

                _.options[option] = value;


            } else if ( type === 'multiple' ) {

                $.each( option , function( opt, val ) {

                    _.options[opt] = val;

                });


            } else if ( type === 'responsive' ) {

                for ( item in value ) {

                    if( $.type( _.options.responsive ) !== 'array' ) {

                        _.options.responsive = [ value[item] ];

                    } else {

                        l = _.options.responsive.length-1;

                        // loop through the responsive object and splice out duplicates.
                        while( l >= 0 ) {

                            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                _.options.responsive.splice(l,1);

                            }

                            l--;

                        }

                        _.options.responsive.push( value[item] );

                    }

                }

            }

            if ( refresh ) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
                .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                    .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
//################################| Header Scroll |###############
(function () {
    $(window).on('scroll',function () {
        if($(window).scrollTop() > 50) {
            $('.header').addClass('bgc');
        }else {
            $('.header').removeClass('bgc');
        }
    });
})();
//################################| Back To Top Button |###############

var backToTopBtn = (function () {
    return{
        init: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) {
                    $('.back-top').fadeIn();
                } else {
                    $('.back-top').fadeOut();
                }
            });
            $('.back-top').click(function(){
                $('body,html').animate({ scrollTop: 0 }, 800);
            });
        }
    }
})();
backToTopBtn.init();
//#######################################| NAV SCROLLING |###################
var navScrolling = (function () {
    return{
        init: function () {
            var navItem  = $('.nav__link'),
                navTarget = $('section');
            $('a[href*="#"]').on("click", function(e){
                e.preventDefault();
                var elementClick =  $(this).attr("href"),
                    destination =   $(elementClick).offset().top;
                $('html, body').animate({scrollTop: destination}, 1000);
            });
        }
    }
})();
navScrolling.init();
// //################################| Hamburger Menu |#####################
// var navigationHamburger = (function () {
//     return{
//         init: function () {
//             var hamburger = $('.hamburger'),
//                 nav = $('.nav'),
//                 navItem = $('.nav__link'),
//                 overlay = $('.menu-overlay');
//             if(document.querySelector('html').offsetWidth <= 768){
//                 hamburger.on('click',function () {
//                     nav.slideToggle(400);
//                     overlay.toggleClass('active');
//                 });
//                 navItem.on('click',function () {
//                     nav.slideToggle(400);
//                     overlay.toggleClass('active');
//                 });
//                 overlay.on('click',function () {
//                     nav.slideToggle(400);
//                     overlay.toggleClass('active');
//                 });
//             }
//         }
//     }
// })();
// navigationHamburger.init();
//#################################| TIMER |############################
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

var countDown = new Date('Nov 31, 2017 00:00:00').getTime(),
    x = setInterval(function() {

        var now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerHTML = Math.floor(distance / (day)),
            document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second);
//####################################################| PARTICIPLE JS |#####################
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
//#################################################| Progress Bar |#############################
$('.progress-bar-fill').delay(1000).queue(function () {
    $(this).css('width', '50%')
});
//#################################################| Slider |#############################
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30',
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    initialSlide: 0,
    dots: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2lwbGUuanMiLCJzbGljay1zbGlkZXIuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaDhGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAvKiBBdXRob3IgOiBWaW5jZW50IEdhcnJlYXUgIC0gdmluY2VudGdhcnJlYXUuY29tXHJcbiAvKiBNSVQgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4gLyogRGVtbyAvIEdlbmVyYXRvciA6IHZpbmNlbnRnYXJyZWF1LmNvbS9wYXJ0aWNsZXMuanNcclxuIC8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXHJcbiAvKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXHJcbiAvKiB2Mi4wLjBcclxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xyXG5cclxuICAgIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XHJcblxyXG4gICAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXHJcbiAgICB0aGlzLnBKUyA9IHtcclxuICAgICAgICBjYW52YXM6IHtcclxuICAgICAgICAgICAgZWw6IGNhbnZhc19lbCxcclxuICAgICAgICAgICAgdzogY2FudmFzX2VsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnI2ZmZidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZV9taW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWTogMzAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhcnJheTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdncmFiJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgICBncmFiOntcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidWJibGU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2U6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB1c2g6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdXNlOnt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXRpbmFfZGV0ZWN0OiBmYWxzZSxcclxuICAgICAgICBmbjoge1xyXG4gICAgICAgICAgICBpbnRlcmFjdDoge30sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7fSxcclxuICAgICAgICAgICAgdmVuZG9yczp7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG1wOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcEpTID0gdGhpcy5wSlM7XHJcblxyXG4gICAgLyogcGFyYW1zIHNldHRpbmdzICovXHJcbiAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgIE9iamVjdC5kZWVwRXh0ZW5kKHBKUywgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwSlMudG1wLm9iaiA9IHtcclxuICAgICAgICBzaXplX3ZhbHVlOiBwSlMucGFydGljbGVzLnNpemUudmFsdWUsXHJcbiAgICAgICAgc2l6ZV9hbmltX3NwZWVkOiBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxcclxuICAgICAgICBtb3ZlX3NwZWVkOiBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQsXHJcbiAgICAgICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXHJcbiAgICAgICAgbGluZV9saW5rZWRfd2lkdGg6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsXHJcbiAgICAgICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxyXG4gICAgICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXHJcbiAgICAgICAgbW9kZV9idWJibGVfc2l6ZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXHJcbiAgICAgICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ucmV0aW5hSW5pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSl7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IDE7XHJcbiAgICAgICAgICAgIHBKUy50bXAucmV0aW5hID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0ICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG5cclxuICAgICAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHBKUy50bXAub2JqLm1vdmVfc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc0luaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XHJcblxyXG4gICAgICAgIGlmKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKXtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiByZXBhaW50IGNhbnZhcyBvbiBhbmltIGRpc2FibGVkICovXHJcbiAgICAgICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGUgPSBmdW5jdGlvbihjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pe1xyXG5cclxuICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAocEpTLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZTtcclxuICAgICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xyXG4gICAgICAgICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcclxuICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBwb3NpdGlvbiAqL1xyXG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgLyogY2hlY2sgcG9zaXRpb24gIC0gaW50byB0aGUgY2FudmFzICovXHJcbiAgICAgICAgaWYodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnggPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cztcclxuICAgICAgICBpZih0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLnJhZGl1cztcclxuICAgICAgICBlbHNlIGlmKHRoaXMueSA8IHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzO1xyXG5cclxuICAgICAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGNvbG9yICovXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHt9O1xyXG4gICAgICAgIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpe1xyXG5cclxuICAgICAgICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByOiBjb2xvci52YWx1ZS5yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XHJcbiAgICAgICAgICAgICAgICByOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcclxuICAgICAgICAgICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgICAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBvcGFjaXR5ICovXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWU7XHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKXtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XHJcbiAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXHJcbiAgICAgICAgdmFyIHZlbGJhc2UgPSB7fVxyXG4gICAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTotMSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTotMC41IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDoxLCB5Oi0wIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5OjAuNSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeToxIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4Oi0xLCB5OjAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0b3AtbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6LTAuNSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MCB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54O1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55O1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUucmFuZG9tKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XHJcblxyXG4gICAgICAgIHRoaXMudnhfaSA9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy52eV9pID0gdGhpcy52eTtcclxuXHJcblxyXG5cclxuICAgICAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xyXG5cclxuICAgICAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcclxuICAgICAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBpZihzaGFwZV90eXBlIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYXBlX3NlbGVjdGVkID0gc2hhcGVfdHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZV90eXBlLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKXtcclxuICAgICAgICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcclxuICAgICAgICAgICAgdGhpcy5pbWcgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiBzaC5pbWFnZS53aWR0aCAvIHNoLmltYWdlLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmltZy5yYXRpbykgdGhpcy5pbWcucmF0aW8gPSAxO1xyXG4gICAgICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXNfYnViYmxlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwLm9wYWNpdHlfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwLmNvbG9yLnJnYil7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrb3BhY2l0eSsnKSc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2gocC5zaGFwZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VkZ2UnOlxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgucmVjdChwLngtcmFkaXVzLCBwLnktcmFkaXVzLCByYWRpdXMqMiwgcmFkaXVzKjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd0cmlhbmdsZSc6XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueC1yYWRpdXMsIHAueStyYWRpdXMgLyAxLjY2LCByYWRpdXMqMiwgMywgMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSwgLy8gc3RhcnRYXHJcbiAgICAgICAgICAgICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzdGFyJzpcclxuICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcclxuICAgICAgICAgICAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxyXG4gICAgICAgICAgICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyKjIuNjYvMy41KSwgLy8gc3RhcnRZXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXcoKXtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICBpbWdfb2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHAueC1yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcC55LXJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMixcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMiAvIHAuaW1nLnJhdGlvXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nX29iaiA9IHBKUy50bXAuaW1nX29iajtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpbWdfb2JqKXtcclxuICAgICAgICAgICAgICAgICAgICBkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xyXG4gICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xyXG4gICAgICAgICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAvKiB0aGUgcGFydGljbGUgKi9cclxuICAgICAgICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcclxuICAgICAgICAgICAgLy8gdmFyIGYgPSAtQkFOR19TSVpFIC8gZDtcclxuICAgICAgICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcclxuICAgICAgICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XHJcbiAgICAgICAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO1xyXG4gICAgICAgICAgICAgICAgcC54ICs9IHAudnggKiBtcztcclxuICAgICAgICAgICAgICAgIHAueSArPSBwLnZ5ICogbXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGNoYW5nZSBvcGFjaXR5IHN0YXR1cyAqL1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHAub3BhY2l0eV9zdGF0dXMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAub3BhY2l0eSA+PSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHAub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHkgKz0gcC52bztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocC5vcGFjaXR5IDwgMCkgcC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIHNpemUgKi9cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIGlmKHAuc2l6ZV9zdGF0dXMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocC5yYWRpdXMgPCAwKSBwLnJhZGl1cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGNoYW5nZSBwYXJ0aWNsZSBwb3NpdGlvbiBpZiBpdCBpcyBvdXQgb2YgY2FudmFzICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X3BvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6ICBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X3BvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudyl7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcclxuICAgICAgICAgICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwLnggKyBwLnJhZGl1cyA8IDApe1xyXG4gICAgICAgICAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCl7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBuZXdfcG9zLnlfdG9wO1xyXG4gICAgICAgICAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHAueSArIHAucmFkaXVzIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBuZXdfcG9zLnlfYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xyXG4gICAgICAgICAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdW5jZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGV2ZW50cyAqL1xyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ2dyYWInLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBjbGVhciBjYW52YXMgKi9cclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG5cclxuICAgICAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG4gICAgICAgICAgICBwLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBpbml0IGFsbCAqL1xyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcclxuXHJcbiAgICAgICAgLyogcmVzdGFydCAqL1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMS9wSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBzdHlsZSAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAvKiBwYXRoICovXHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyAgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgICAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXggPSBkeC8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCoxMDAwKSxcclxuICAgICAgICAgICAgICAgIGF5ID0gZHkvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkqMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBwMS52eCAtPSBheDtcclxuICAgICAgICAgICAgcDEudnkgLT0gYXk7XHJcblxyXG4gICAgICAgICAgICBwMi52eCArPSBheDtcclxuICAgICAgICAgICAgcDIudnkgKz0gYXk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXHJcbiAgICAgICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XHJcblxyXG4gICAgICAgIGlmKGRpc3QgPD0gZGlzdF9wKXtcclxuICAgICAgICAgICAgcDEudnggPSAtcDEudng7XHJcbiAgICAgICAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xyXG5cclxuICAgICAgICAgICAgcDIudnggPSAtcDIudng7XHJcbiAgICAgICAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iLCBwb3Mpe1xyXG5cclxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7IGkrKyl7XHJcbiAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZihpID09IG5iLTEpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24obmIpe1xyXG5cclxuICAgICAgICBwSlMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBuYik7XHJcbiAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcclxuXHJcbiAgICAgICAgLyogb24gaG92ZXIgZXZlbnQgKi9cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxyXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBwLnJhZGl1cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogbW91c2Vtb3ZlIC0gY2hlY2sgcmF0aW8gKi9cclxuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogc2l6ZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA+IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNpemUgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLXBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLyogbW91c2VsZWF2ZSAqL1xyXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKXtcclxuICAgICAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXHJcbiAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXHJcbiAgICAgICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbioyKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCkgdmFyIG9iaiA9IHBfb2JqX2J1YmJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqICE9IGJ1YmJsZV9wYXJhbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVfdG1wID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZiA9IGJ1YmJsZV9wYXJhbSAtIHZhbHVlX3RtcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcclxuICAgICAgICAgICAgICAgIC8qIHNpemUgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcclxuICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2VSYWRpdXMgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSAxMDAsXHJcbiAgICAgICAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgeDogcC54ICsgbm9ybVZlYy54ICogcmVwdWxzZUZhY3RvcixcclxuICAgICAgICAgICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcclxuICAgICAgICAgICAgICAgIGlmKHBvcy54IC0gcC5yYWRpdXMgPiAwICYmIHBvcy54ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLncpIHAueCA9IHBvcy54O1xyXG4gICAgICAgICAgICAgICAgaWYocG9zLnkgLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnkgKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMuaCkgcC55ID0gcG9zLnk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcC54ID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBwb3MueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xyXG5cclxuICAgICAgICAgICAgaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xyXG4gICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY291bnQgPT0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LCAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcclxuICAgICAgICAgICAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxyXG4gICAgICAgICAgICAgICAgICAgIGQgPSBkeCpkeCArIGR5KmR5O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzcygpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHAueSArIHAudnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcclxuICAgICAgICAgICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcclxuICAgICAgICAgICAgICAgIC8vICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcC52eCA9IHAudnhfaTtcclxuICAgICAgICAgICAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XHJcblxyXG4gICAgICAgICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cclxuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMS9wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHN0eWxlICovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogcGF0aCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLyogZXZlbnRzIHRhcmdldCBlbGVtZW50ICovXHJcbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKXtcclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSB3aW5kb3c7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKiBkZXRlY3QgbW91c2UgcG9zIC0gb24gaG92ZXIgLyBjbGljayBldmVudCAqL1xyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgICAgICAgLyogZWwgb24gbW91c2Vtb3ZlICovXHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmVsID09IHdpbmRvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc194ID0gZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NfeSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc194ID0gZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zX3kgPSBlLm9mZnNldFkgfHwgZS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gcG9zX3g7XHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IHBvc195O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXHJcbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcclxuXHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeTtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24qMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuZW5hYmxlKXtcclxuXHJcbiAgICAgICAgICAgIC8qIGNhbGMgYXJlYSAqL1xyXG4gICAgICAgICAgICB2YXIgYXJlYSA9IHBKUy5jYW52YXMuZWwud2lkdGggKiBwSlMuY2FudmFzLmVsLmhlaWdodCAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcclxuICAgICAgICAgICAgICAgIGFyZWEgPSBhcmVhLyhwSlMuY2FudmFzLnB4cmF0aW8qMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cclxuICAgICAgICAgICAgdmFyIG5iX3BhcnRpY2xlcyA9IGFyZWEgKiBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSAvIHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYTtcclxuXHJcbiAgICAgICAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cclxuICAgICAgICAgICAgdmFyIG1pc3NpbmdfcGFydGljbGVzID0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBuYl9wYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIGlmKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcclxuICAgICAgICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHAxLCBwb3NpdGlvbil7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxyXG4gICAgICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKXtcclxuICAgICAgICAgICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICAgICAgICAgICAgcDEueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAocDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xyXG4gICAgICAgIHZhciBzdmdYbWwgPSBwSlMudG1wLnNvdXJjZV9zdmcsXHJcbiAgICAgICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxyXG4gICAgICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICAgICAgICAgICAgaWYocC5jb2xvci5yZ2Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrcC5vcGFjaXR5KycpJztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytwLm9wYWNpdHkrJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cclxuICAgICAgICB2YXIgc3ZnID0gbmV3IEJsb2IoW2NvbG9yZWRTdmdYbWxdLCB7dHlwZTogJ2ltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCd9KSxcclxuICAgICAgICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcclxuICAgICAgICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xyXG5cclxuICAgICAgICAvKiBjcmVhdGUgcGFydGljbGUgaW1nIG9iaiAqL1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHAuaW1nLm9iaiA9IGltZztcclxuICAgICAgICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgRE9NVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgICAgICBwSlMudG1wLmNvdW50X3N2ZysrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltZy5zcmMgPSB1cmw7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcclxuICAgICAgICBwSlNEb20gPSBudWxsO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlID0gZnVuY3Rpb24oYywgc3RhcnRYLCBzdGFydFksIHNpZGVMZW5ndGgsIHNpZGVDb3VudE51bWVyYXRvciwgc2lkZUNvdW50RGVub21pbmF0b3Ipe1xyXG5cclxuICAgICAgICAvLyBCeSBQcm9ncmFtbWluZyBUaG9tYXMgLSBodHRwczovL3Byb2dyYW1taW5ndGhvbWFzLndvcmRwcmVzcy5jb20vMjAxMy8wNC8wMy9uLXNpZGVkLXNoYXBlcy9cclxuICAgICAgICB2YXIgc2lkZUNvdW50ID0gc2lkZUNvdW50TnVtZXJhdG9yICogc2lkZUNvdW50RGVub21pbmF0b3I7XHJcbiAgICAgICAgdmFyIGRlY2ltYWxTaWRlcyA9IHNpZGVDb3VudE51bWVyYXRvciAvIHNpZGVDb3VudERlbm9taW5hdG9yO1xyXG4gICAgICAgIHZhciBpbnRlcmlvckFuZ2xlRGVncmVlcyA9ICgxODAgKiAoZGVjaW1hbFNpZGVzIC0gMikpIC8gZGVjaW1hbFNpZGVzO1xyXG4gICAgICAgIHZhciBpbnRlcmlvckFuZ2xlID0gTWF0aC5QSSAtIE1hdGguUEkgKiBpbnRlcmlvckFuZ2xlRGVncmVlcyAvIDE4MDsgLy8gY29udmVydCB0byByYWRpYW5zXHJcbiAgICAgICAgYy5zYXZlKCk7XHJcbiAgICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgICBjLnRyYW5zbGF0ZShzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICAgICAgYy5tb3ZlVG8oMCwwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsMCk7XHJcbiAgICAgICAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsMCk7XHJcbiAgICAgICAgICAgIGMucm90YXRlKGludGVyaW9yQW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Muc3Ryb2tlKCk7XHJcbiAgICAgICAgYy5maWxsKCk7XHJcbiAgICAgICAgYy5yZXN0b3JlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5leHBvcnRJbWcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHBKUy5jYW52YXMuZWwudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSwgJ19ibGFuaycpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyA9IGZ1bmN0aW9uKHR5cGUpe1xyXG5cclxuICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpe1xyXG5cclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnc3ZnJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKTtcclxuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuaW1nX29iaiA9IGltZztcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xyXG4gICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XHJcblxyXG4gICAgICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLmNvdW50X3N2ZyA+PSBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLmltZ19vYmogIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hhcGUgaXMgaW1hZ2VcclxuICAgICAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XHJcblxyXG4gICAgICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcEpTLnRtcC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUoY2hlY2spO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMudG1wLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5pbml0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLyogaW5pdCBjYW52YXMgKyBwYXJ0aWNsZXMgKi9cclxuICAgICAgICBwSlMuZm4ucmV0aW5hSW5pdCgpO1xyXG4gICAgICAgIHBKUy5mbi5jYW52YXNJbml0KCk7XHJcbiAgICAgICAgcEpTLmZuLmNhbnZhc1NpemUoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzUGFpbnQoKTtcclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuXHJcbiAgICAgICAgLyogcGFydGljbGVzLmxpbmVfbGlua2VkIC0gY29udmVydCBoZXggY29sb3JzIHRvIHJnYiAqL1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBoZXhUb1JnYihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGlzSW5BcnJheSgnaW1hZ2UnLCBwSlMucGFydGljbGVzLnNoYXBlLnR5cGUpKXtcclxuICAgICAgICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyhwSlMudG1wLmltZ190eXBlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcclxuXHJcblxyXG5cclxufTtcclxuXHJcbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXHJcblxyXG5PYmplY3QuZGVlcEV4dGVuZCA9IGZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcclxuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcclxuICAgICAgICAgICAgYXJndW1lbnRzLmNhbGxlZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxyXG4gICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcclxuICAgICAgICBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICAgIH07XHJcbn0pKCk7XHJcblxyXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9ICggZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICAgfHxcclxuICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG4gICAgICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcclxuICAgICAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0XHJcbn0gKSgpO1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KXtcclxuICAgIC8vIEJ5IFRpbSBEb3duIC0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTYyNDEzOS8zNDkzNjUwXHJcbiAgICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXHJcbiAgICB2YXIgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXHJcbiAgICAgICAgfSA6IG51bGw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xyXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbndpbmRvdy5wSlNEb20gPSBbXTtcclxuXHJcbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XHJcblxyXG4gICAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xyXG4gICAgaWYodHlwZW9mKHRhZ19pZCkgIT0gJ3N0cmluZycpe1xyXG4gICAgICAgIHBhcmFtcyA9IHRhZ19pZDtcclxuICAgICAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXHJcbiAgICBpZighdGFnX2lkKXtcclxuICAgICAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBwSlMgZWxlbWVudHMgKi9cclxuICAgIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcclxuICAgICAgICBwSlNfY2FudmFzX2NsYXNzID0gJ3BhcnRpY2xlcy1qcy1jYW52YXMtZWwnLFxyXG4gICAgICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcclxuXHJcbiAgICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xyXG4gICAgaWYoZXhpc3RfY2FudmFzLmxlbmd0aCl7XHJcbiAgICAgICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xyXG4gICAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XHJcblxyXG4gICAgLyogc2V0IHNpemUgY2FudmFzICovXHJcbiAgICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgICAvKiBhcHBlbmQgY2FudmFzICovXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xyXG5cclxuICAgIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xyXG4gICAgaWYoY2FudmFzICE9IG51bGwpe1xyXG4gICAgICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9IGZ1bmN0aW9uKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spe1xyXG5cclxuICAgIC8qIGxvYWQganNvbiBjb25maWcgKi9cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoX2NvbmZpZ19qc29uKTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xyXG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbn07IiwiLypcclxuIF8gXyAgICAgIF8gICAgICAgX1xyXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cclxuIC8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcclxuIFxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXHJcbiB8X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cclxuIHxfXy9cclxuIFZlcnNpb246IDEuOC4xXHJcbiBBdXRob3I6IEtlbiBXaGVlbGVyXHJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cclxuIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xyXG4gUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xyXG4gSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xyXG4gKi9cclxuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xyXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbn0oZnVuY3Rpb24oJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xyXG5cclxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xyXG5cclxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XHJcblxyXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxkaXYgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+IDxkaXYgY2xhc3M9XCJzbGljay1wcmV2X19pY29uXCI+IDxkaXYgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwic2xpY2stcHJldl9fdGV4dFwiPlByZXZpb3VzPC9kaXY+IDwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8ZGl2IGFyaWEtbGFiZWw9XCJOZXh0XCIgY2xhc3M9XCJzbGljay1uZXh0XCI+IDxkaXYgY2xhc3M9XCJzbGljay1uZXh0X190ZXh0XCI+TmV4dDwvZGl2PiA8ZGl2IGNsYXNzPVwic2xpY2stbmV4dF9faWNvblwiPiA8ZGl2IGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxyXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxyXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcclxuXHJcbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcclxuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xyXG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xyXG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcclxuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcclxuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xyXG5cclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG5cclxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XHJcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xyXG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xyXG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xyXG5cclxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XHJcblxyXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xyXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcclxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcclxuXHJcblxyXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcclxuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBTbGljaztcclxuXHJcbiAgICB9KCkpO1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XHJcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xyXG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxyXG4gICAgICAgICAgICBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxyXG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxyXG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxyXG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xyXG5cclxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XHJcblxyXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBpLCBkb3Q7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xyXG5cclxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9XHJcbiAgICAgICAgICAgIF8uJHNsaWRlclxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XHJcblxyXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cclxuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxyXG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XHJcblxyXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcclxuXHJcbiAgICAgICAgXy5idWlsZERvdHMoKTtcclxuXHJcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XHJcblxyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XHJcblxyXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XHJcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XHJcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcclxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXHJcbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXHJcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxyXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXHJcbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcclxuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xyXG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcclxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xyXG5cclxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XHJcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcclxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcclxuXHJcbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcclxuXHJcbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcclxuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xyXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XHJcblxyXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcclxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xyXG5cclxuICAgICAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG5cclxuICAgICAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlclxyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcclxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcclxuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRhcmdldExlZnQsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXHJcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxyXG4gICAgICAgICAgICBjb2VmO1xyXG5cclxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XHJcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxyXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxyXG4gICAgICAgICAgICBtYXg7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcclxuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XHJcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcclxuXHJcbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcblxyXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xyXG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XHJcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcclxuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcclxuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLmluaXRBREEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxyXG4gICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XHJcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xyXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXHJcbiAgICAgICAgICAgIH0pLmVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93XHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xyXG4gICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcclxuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xyXG5cclxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcclxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xyXG5cclxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcclxuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgXy5pbml0VUkoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xyXG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XHJcblxyXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxyXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcclxuXHJcbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcblxyXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXHJcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxyXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcclxuXHJcbiAgICAgICAgXy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xyXG5cclxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG5cclxuICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcclxuXHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XHJcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcclxuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcclxuICAgICAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xyXG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XHJcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcclxuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cclxuICAgICAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcclxuICAgICAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcclxuICAgICAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXHJcbiAgICAgICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy51bmxvYWQoKTtcclxuICAgICAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcclxuXHJcbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcclxuXHJcbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcclxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcclxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xyXG5cclxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgIC5lcShpbmRleClcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cclxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XHJcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXHJcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XHJcblxyXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcclxuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcclxuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xyXG5cclxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xyXG5cclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcclxuXHJcbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcclxuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xyXG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xyXG5cclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcclxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcclxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcclxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcclxuXHJcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcclxuXHJcbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcclxuXHJcbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xyXG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRvdWNoZXM7XHJcblxyXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG5cclxuICAgICAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cykge1xyXG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xyXG4gICAgICAgIF8uZGVzdHJveSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcclxuXHJcbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXHJcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90c1xyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIC5lbmQoKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxyXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICByZXQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXztcclxuICAgIH07XHJcblxyXG59KSk7IiwiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgSGVhZGVyIFNjcm9sbCB8IyMjIyMjIyMjIyMjIyMjXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDUwKSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnYmdjJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JnYycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSgpO1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBCYWNrIFRvIFRvcCBCdXR0b24gfCMjIyMjIyMjIyMjIyMjI1xyXG5cclxudmFyIGJhY2tUb1RvcEJ0biA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gNjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhY2stdG9wJykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYWNrLXRvcCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5iYWNrLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuYmFja1RvVG9wQnRuLmluaXQoKTtcclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IE5BViBTQ1JPTExJTkcgfCMjIyMjIyMjIyMjIyMjIyMjIyNcclxudmFyIG5hdlNjcm9sbGluZyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmF2SXRlbSAgPSAkKCcubmF2X19saW5rJyksXHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQgPSAkKCdzZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICQoJ2FbaHJlZio9XCIjXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50Q2xpY2sgPSAgJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiA9ICAgJChlbGVtZW50Q2xpY2spLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IGRlc3RpbmF0aW9ufSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxubmF2U2Nyb2xsaW5nLmluaXQoKTtcclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgSGFtYnVyZ2VyIE1lbnUgfCMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyB2YXIgbmF2aWdhdGlvbkhhbWJ1cmdlciA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICB2YXIgaGFtYnVyZ2VyID0gJCgnLmhhbWJ1cmdlcicpLFxyXG4vLyAgICAgICAgICAgICAgICAgbmF2ID0gJCgnLm5hdicpLFxyXG4vLyAgICAgICAgICAgICAgICAgbmF2SXRlbSA9ICQoJy5uYXZfX2xpbmsnKSxcclxuLy8gICAgICAgICAgICAgICAgIG92ZXJsYXkgPSAkKCcubWVudS1vdmVybGF5Jyk7XHJcbi8vICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5vZmZzZXRXaWR0aCA8PSA3Njgpe1xyXG4vLyAgICAgICAgICAgICAgICAgaGFtYnVyZ2VyLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG5hdi5zbGlkZVRvZ2dsZSg0MDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICBuYXZJdGVtLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG5hdi5zbGlkZVRvZ2dsZSg0MDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICBvdmVybGF5Lm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG5hdi5zbGlkZVRvZ2dsZSg0MDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pKCk7XHJcbi8vIG5hdmlnYXRpb25IYW1idXJnZXIuaW5pdCgpO1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgVElNRVIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3Qgc2Vjb25kID0gMTAwMCxcclxuICAgIG1pbnV0ZSA9IHNlY29uZCAqIDYwLFxyXG4gICAgaG91ciA9IG1pbnV0ZSAqIDYwLFxyXG4gICAgZGF5ID0gaG91ciAqIDI0O1xyXG5cclxudmFyIGNvdW50RG93biA9IG5ldyBEYXRlKCdOb3YgMzEsIDIwMTcgMDA6MDA6MDAnKS5nZXRUaW1lKCksXHJcbiAgICB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZGlzdGFuY2UgPSBjb3VudERvd24gLSBub3c7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzJykuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIChkYXkpKSxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJzJykuaW5uZXJIVE1MID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoZGF5KSkgLyAoaG91cikpLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLmlubmVySFRNTCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKGhvdXIpKSAvIChtaW51dGUpKSxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZHMnKS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIChtaW51dGUpKSAvIHNlY29uZCk7XHJcblxyXG4gICAgICAgIC8vZG8gc29tZXRoaW5nIGxhdGVyIHdoZW4gZGF0ZSBpcyByZWFjaGVkXHJcbiAgICAgICAgLy9pZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgLy8gIGNsZWFySW50ZXJ2YWwoeCk7XHJcbiAgICAgICAgLy8gICdJVCdTIE1ZIEJJUlRIREFZITtcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LCBzZWNvbmQpO1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFBBUlRJQ0lQTEUgSlMgfCMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vKiBwYXJ0aWNsZXNKUy5sb2FkKEBkb20taWQsIEBwYXRoLWpzb24sIEBjYWxsYmFjayAob3B0aW9uYWwpKTsgKi9cclxucGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJ2Fzc2V0cy9wYXJ0aWNsZXMuanNvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcclxufSk7XHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgUHJvZ3Jlc3MgQmFyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4kKCcucHJvZ3Jlc3MtYmFyLWZpbGwnKS5kZWxheSgxMDAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNzcygnd2lkdGgnLCAnNTAlJylcclxufSk7XHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgU2xpZGVyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4kKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgY2VudGVyUGFkZGluZzogJzMwJyxcclxuICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSk7Il19
