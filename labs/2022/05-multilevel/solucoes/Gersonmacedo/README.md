# Nome aluno
* Gerson Macedo

# Composição Multinível, Serviços e REST
*Lab de Componentização e Reúso de Software 03/09/2022*

Elabore um protótipo de uma interface gráfica com um usuário no MIT App Inventor no qual:
* ou se digite o nome de um romance e o aplicativo mostre dados desse romance recuperados da DBPedia;
* ou se digite o número do quadrinho e o aplicativo mostre dados sobre ele do xkcd.
# Design
* ![image](https://user-images.githubusercontent.com/96983768/189163750-fa1de1a0-fdb4-440f-91c6-0fd5a6fa00a8.png)

# Blocks
![image](https://user-images.githubusercontent.com/96983768/189164720-ac7682c7-2e6b-4f73-8ebf-47be46fdde6f.png)


# Tela com sucesso
![image](https://user-images.githubusercontent.com/96983768/189166979-6178f52a-5ee9-4afa-9393-e006985e568f.png)

# Tela com Digitos invalidos
![image](https://user-images.githubusercontent.com/96983768/189167136-9337d0e2-341c-411e-acab-6aafeca51591.png)



Serão considerados pontos de qualidade:
* se a app mostrar a imagem do romance (DBPedia)
* se aceitar com espaços e converter para underscore (DBPedia)
* se houver tratamento de erros

No caso da DBPedia, o usuário não deve digitar o .json. No caso do xkcd, não é suficiente mostrar a imagem dos quadrinhos, porque isso foi feito em sala. Devem ser mostrados outros dados, como título, ano de publicação etc.
