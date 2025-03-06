// El módulo 'vscode' contiene la API de extensibilidad de VS Code
// Importa el módulo y haz referencia a él con el alias vscode en tu código a continuación
import * as vscode from 'vscode';

// Este método se llama cuando tu extensión es activada
// Tu extensión se activa la primera vez que se ejecuta el comando
export function activate(context: vscode.ExtensionContext) {

	// Usa la consola para salir información de diagnóstico (console.log) y errores (console.error)
	// Esta línea de código solo se ejecutará una vez cuando tu extensión sea activada
	console.log('¡Felicidades, tu extensión "helloworld" ahora está activa!');

	// El comando ha sido definido en el archivo package.json
	// Ahora proporciona la implementación del comando con registerCommand
	// El parámetro commandId debe coincidir con el campo de comando en package.json
	const saludoComando = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// El código que pongas aquí se ejecutará cada vez que tu comando sea ejecutado
		// Muestra un mensaje al usuario
		vscode.window.showInformationMessage('¡Hola VS Code!');
	});

	const mostrarHoraComando = vscode.commands.registerCommand('helloworld.showTime', () => {     //aqui estamos registrando el comando en los comandos de vscode pero no en la extension
		// Obtener la hora actual
		const horaActual = new Date().toLocaleTimeString();
		// Mostrar la hora en un mensaje de advertencia
		vscode.window.showWarningMessage(`¡Advertencia! La hora actual es: ${horaActual}`);
	});
	//supuesta nueva funcion 0.2.0
	//supuesta nueva funcion 0.3.0
	//supuesta nueva funcion 0.4.0
	//supuesta nueva funcion 0.5.0

	// Agregar los comandos al contexto de la extensión un comando es un objeto y sera liberado cuando se desactive la extension
	context.subscriptions.push(saludoComando, mostrarHoraComando);
}

// Este método se llama cuando tu extensión es desactivada
export function deactivate() {}
