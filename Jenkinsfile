pipeline{
    agent any
    tools{
        jdk 'JDK21'
        maven 'maven'
    }
    stages{
        stage('Checkout'){
            steps{
                git branch: 'main', 
                url: 'https://github.com/RagulKannan2005/sampledeployment.git'
            }
        }
        stage('Build'){
            steps{
                bat "mvn clean install -DskipTests"
            }
        }
        stage('Test'){
            steps{
                bat 'mvn test -DskipTests'
            }
        }
    }
    post{
        success{
            echo 'Build and Test Successful!'
        }
        failure{
            echo 'Build or Test Failed!'
        }
    }
}