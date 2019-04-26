//P5.AUDIO
mic = new p5.AudioIn();

function p5Setup(){
	mic.start();
}

function testAudio(){
	let vol = mic.getLevel();
	setInterval(function(){
		console.log(vol);
	}, 1000);
}

function THREESetup(){
	//THREE.js
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	renderer.setClearColor( 0x000000 );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( 0x000000 )

	var textureLoader = new THREE.TextureLoader();

	var texture0 = textureLoader.load('https://img.icons8.com/ios/50/000000/checked-checkbox.png');
	var texture1 = textureLoader.load('https://img.icons8.com/ios/50/000000/unchecked-checkbox.png');

	var materialArray = [
	    new THREE.MeshBasicMaterial( { map: texture0 } ),
	    new THREE.MeshBasicMaterial( { map: texture1 } ),
	    new THREE.MeshBasicMaterial( { map: texture0 } ),
	    new THREE.MeshBasicMaterial( { map: texture1 } ),
	    new THREE.MeshBasicMaterial( { map: texture0 } ),
	    new THREE.MeshBasicMaterial( { map: texture1 } )
	];

	var box = new THREE.Mesh( geometry, material );
	scene.add( box );

	camera.position.z = 5;
	camera.position.y = 5;

	var light = new THREE.PointLight( 0xFFFFff );
	light.position.set( 5, 0, 25 );
	scene.add( light );

	raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();

	let checked = false;

	function onMouseMove( event ) {

		// calculate mouse position in normalized device coordinates
		// (-1 to +1) for both components

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	  checked = true;
	  
	}

	var render = function () {
	  requestAnimationFrame( render );
	 
	  	// update the picking ray with the camera and mouse   position
		raycaster.setFromCamera( mouse, camera );

		// calculate objects intersecting the picking ray
		var intersects = raycaster.intersectObjects( scene.children );
	  
	  for(let i = 0; i<intersects.length; i++){
	    if(checked){
	      
	    } else {
	      
	    }
	  }
	  
	  box.rotation.y += .01;
	  
	  camera.updateProjectionMatrix();
	  
	  camera.lookAt(scene.position)

	  renderer.render(scene, camera);
	};

	window.addEventListener( 'click', onMouseMove, false );

	render();
}

testAudio();
THREESetup();
p5Setup();

