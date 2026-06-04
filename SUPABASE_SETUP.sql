-- Execute este SQL no Supabase SQL Editor
-- (Menu esquerdo > SQL Editor > New query)

CREATE TABLE onboarding_config (
  id integer PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

-- Permite leitura pública (alunos podem ver)
ALTER TABLE onboarding_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leitura pública"
  ON onboarding_config FOR SELECT
  USING (true);

CREATE POLICY "Escrita pública"
  ON onboarding_config FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Atualização pública"
  ON onboarding_config FOR UPDATE
  USING (true);
