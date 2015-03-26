var listaCamadas = new Array();

var camada_google;

function preparaCamadaGoogle() {
  camada_google = new google.maps.StyledMapType([
  							{"featureType": "poi", "stylers":  [{ "visibility": "on" }]},
                     {"featureType": "transit.station", "stylers": [{ "visibility": "off" }]}
                    ],{name: "Sem Camadas Google"});
  
  // Camadas do Google
  mapaProjeto.mapTypes.set('camadas_google', camada_google);

}

function prepararCarregamentoKML() {
  for(var i=0;i<listaKML.length;i++){

    var kml = listaKML[i];

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "camada";
    checkbox.value = kml.id;
    checkbox.id = kml.id;

    checkbox.onclick=alternarCamada;

    var span = document.createElement('span');
    span.textContent=kml.nome;

    var quebra = document.createElement('br');

    document.getElementById('menu').appendChild(checkbox);
    document.getElementById('menu').appendChild(span);
    document.getElementById('menu').appendChild(quebra);       
  }
}

function alternarCamada(camadaEscolhida) {

  var index=camadaEscolhida.currentTarget.value;

  if(listaCamadas[index]==null){
    listaCamadas[listaKML[index-1].id]=new google.maps.KmlLayer({url:listaKML[index-1].url,preserveViewport:true});
  }

  if(listaCamadas[index].getMap()) {
    listaCamadas[index].setMap(null);
  } else {
    listaCamadas[index].setMap(mapaProjeto);
    //centralizaMapa();
  }
}

function centralizaMapa() {
  mapaProjeto.setCenter(centroMapa);
  mapaProjeto.setZoom(14);
}
