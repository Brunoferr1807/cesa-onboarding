# CESA — Onboarding do Aluno

## 1. Configurar o Supabase

No painel do Supabase, vá em **SQL Editor → New query**, cole o conteúdo do arquivo `SUPABASE_SETUP.sql` e clique em **Run**.

## 2. Subir no GitHub

```bash
git init
git add .
git commit -m "CESA Onboarding v1"
git remote add origin https://github.com/SEU_USUARIO/cesa-onboarding.git
git push -u origin main
```

## 3. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) → **Add New → Project**
2. Selecione o repositório `cesa-onboarding`
3. Clique **Deploy**
4. Em ~1 minuto seu link estará disponível

## Modo Administrador

Senha: `cesa2025`

As edições salvas no modo admin ficam armazenadas no Supabase e aparecem para todos os alunos que abrirem o link.
