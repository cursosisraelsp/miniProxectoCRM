/**
 * @fileoverview Componente de login para el CRM
 * @author Angel
 */

export class Login {
    private username: string;
    private password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }

    /**
     * Valida las credenciales del usuario
     * @param {string} username - Nombre de usuario
     * @param {string} password - Contraseña
     * @returns {Promise<boolean>} - Retorna true si las credenciales son válidas
     */
    public async validateCredentials(username: string, password: string): Promise<boolean> {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            return data.success;
        } catch (error) {
            console.error('Error en la validación:', error);
            return false;
        }
    }

    /**
     * Renderiza el formulario de login
     * @returns {HTMLElement} - Elemento HTML del formulario
     */
    public render(): HTMLElement {
        const form = document.createElement('form');
        form.innerHTML = `
            <div class="login-container">
                <h2>Iniciar Sesión</h2>
                <input type="text" id="username" placeholder="Usuario" required>
                <input type="password" id="password" placeholder="Contraseña" required>
                <button type="submit">Entrar</button>
            </div>
        `;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = (document.getElementById('username') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            
            const isValid = await this.validateCredentials(username, password);
            if (isValid) {
                window.location.href = '/dashboard';
            } else {
                alert('Credenciales inválidas');
            }
        });

        return form;
    }
} 