pipeline {
    agent {
        kubernetes {
            label 'jenkins-agent'  // Usa el pod template por defecto
        }
    }

    stages {
        stage('📥 Checkout') {
            steps {
                script {
                    echo "🔹 Commit actual: ${env.GIT_COMMIT}"
                }
                checkout scm  // Usa la configuración del SCM del job
            }
        }

        stage('🔍 Mostrar cambios') {
            steps {
                script {
                    def changes = sh(
                        script: 'git log --oneline HEAD~1..HEAD',
                        returnStdout: true
                    ).trim()
                    echo "📌 Últimos cambios:\n${changes}"
                }
            }
        }

        stage('👋 Hello World') {
            steps {
                sh '''
                echo "🎉 ¡Hola! Este pipeline se disparó porque hubo un cambio en la rama '${BRANCH}'."
                echo "📦 Este repositorio tiene $(ls -1 | wc -l) archivos en la raíz."
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completado con éxito."
        }
        failure {
            echo "❌ El pipeline falló. Revisa los logs."
        }
    }
}