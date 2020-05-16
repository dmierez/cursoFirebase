$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()

  // TODO: Adicionar el service worker

  // Init Firebase nuevamente
  firebase.initializeApp(firebaseConfig);

  // TODO: Registrar LLave publica de messaging

  // TODO: Solicitar permisos para las notificaciones

  // TODO: Recibir las notificaciones cuando el usuario esta foreground

  // TODO: Recibir las notificaciones cuando el usuario esta background

  // TODO: Listening real time

  // TODO: Firebase observador del cambio de estado
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      $('#btnInicioSesion').text('Salir')
      if(user.photoURL) {
        $('#avatar').attr('src', user.photoURL)
      }else {
        $('#avatar').attr('src', '')
      }
    }else {
      $('#btnInicioSesion').text('Ingresar')
      $('#avatar').attr('src', '')
    }
  })

  //
  //$
  //
  //$('#btnInicioSesion').text('Iniciar Sesión')
  //$('#avatar').attr('src', 'imagenes/usuario.png')

  // TODO: Evento boton inicio sesion
  $('#btnInicioSesion').click(() => {
    const user = firebase.auth().currentUser
    if (user) {
      $('#btnInicioSesion').text('Iniciando pa!')
      return firebase.auth().signOut()
      .then (() => {
        Materialize.toast(`Saliste de escueLean`, 4000)
      }).catch (error => {
        Materialize.toast(`Error al realizar SignOut => ${error}`, 4000)
      })
    }

    //$('#avatar').attr('src', 'imagenes/usuario.png')
    // Materialize.toast(`Error al realizar SignOut => ${error}`, 4000)
    

    $('#emailSesion').val('')
    $('#passwordSesion').val('')
    $('#modalSesion').modal('open')
  })

  $('#avatar').click(() => {
    firebase.auth().signOut()
    .then(() => {
      $('#avatar').attr('src', '')
      Materialize.toast(`<p>Cerraste tu sesión`, 4000)
    })
    .catch(error => {
      Materialize.toast(`Error al cerrar tu sesión ${error}`, 4000)
    })
  })

  $('#btnTodoPost').click(() => {
    $('#tituloPost').text('Posts de la Comunidad')   
  })

  $('#btnMisPost').click(() => {
    //$('#tituloPost').text('Mis Posts')
    //Materialize.toast(`Debes estar autenticado para ver tus posts`, 4000)    
  })
})
