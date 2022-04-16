# laundry api

This is an rest api, that can be used to manage a laundry.

# Cadastro de usuarios

**RF**

[X]-Deve ser possivel cadastrar um usuário
O usuario de atualizar os seus dados 

**RN**

[X]-Não deve ser possivel cadastrar um usuario com o email de um já existente
[X]-Um usuário deve ser cadastrado como não sendo admin por default

# Promoção de usuarios

**RF**

[X]-Deve ser possivel tornar um usuário admin
[X]-Deve ser possivel tornar um usuário funcionário

**RN**

[X]-Apenas um usuário admin pode tornar outro usuário admin ou funcionário

# Demoção de usuarios

**RF**

[X]-Deve ser possivel tornar um usuário admin, não admin
[X]-Deve ser possivel tornar um usuário funcionário, não funcionario

**RN**

[X]-Apenas um usuário admin pode demover um usuários

# Encerramento de contas

**RF**

[X]-Deve ser possivel encerrar uma conta

**RN**

Apenas um usuário pode encerrar a sua propria conta
Um admin pode encerrar a conta de um usuário
Um admin pode apenas encerrar a sua conta se não for SuperAdmin

# Bloqueio de usuarios

**RF**

Deve ser possivel bloquear a conta de um usuário

**RN**

A conta do SuperAdmin não pode ser bloqueada
Apenas um admin pode bloquear a conta de um usuário

# Listagem de usuarios

**RF**

Deve ser possivel listar todos usuários
Deve ser possivel listar conta um usuário

**RN**

Apenas um admin ou funcionário realizar está acção

# Cadastro de categorias

**RF**

Deve ser possivel cadastrar uma categoria

**RN**

Não deve ser possivel cadastrar uma categoria com o nome de uma já existente
Não deve ser possivel cadatrar uma categoria por um usuário que não é admin

# Listagem de categorias

**RF**

Deve ser possivel listar todas as categorias

**RN**

Não deve ser possivel listar uma categoria que não existe

# Deletar categoria

**RF**

Deve ser possivel deletar uma categoria

**RN**
Não de ser possivel listar uma categoria não existente
Apenas um usário admin pode deletar uma categoria

# Cadastro de tecidos (fabrics)

**RF**

Deve ser possivel cadastrar um tecido

**RN**

Não deve ser possivel cadastrar um tecido com o nome de um já existente
Não deve ser possivel cadatrar uma tecido por um usuário que não é admin

# Listagem de tecidos (fabrics)

**RF**

Deve ser possivel listar todos os tecidos

**RN**

Não deve ser possivel listar um tecido que não existe

# Deletar tecido (fabrics)

**RF**

Deve ser possivel deletar um tecido

**RN**

Apenas um usário admin pode deletar um tecido

# Cadastro de serviço

**RF**

Deve ser possivel cadastrar um serviço

**RN**

Não deve ser possivel cadastrar um serviço com o nome de um já existente
Não deve ser possivel cadatrar uma serviço por um usuário que não é admin

# Listagem de serviços

**RF**

Deve ser possivel listar todos os serviços

**RN**

Não deve ser possivel listar um serviço que não existe

# Deletar serviço

**RF**

Deve ser possivel deletar um serviço

**RN**

Apenas um usário admin pode deletar um serviço

# Cadastro de roupas

**RF**

Deve ser possivel cadastrar uma roupa

**RN**

Não deve ser possivel cadastrar uma roupa com o nome de uma já existente

# Listagem de roupas

**RF**

Deve ser possivel listar uma roupa
Deve ser possivel listar todas as roupas

**RN**

Apenas o usário dono das roupas e um funcionario/admin pode listar as suas roupas

# Deletar roupas

**RF**

Deve ser possivel deletar uma roupa

**RN**

Apenas o usário dono das roupas deletar
as suas roupas

# Prestação de (to_wash)

**RF**
Deve ser possivel cadastrar um to_wash.

**RN**
O to_wash deve ter duração minima de 24 horas.
