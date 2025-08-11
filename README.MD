🌍 Aloj — Marketplace Geolocalizado de Lojas

Aloj é uma plataforma pública para conectar consumidores a empresas locais, com mapa interativo, catálogo de lojas e sublojas personalizadas.
Cada empresa cadastrada pode ter sua própria página (loja virtual) e, opcionalmente, aplicativo PWA/APK integrado ao sistema.


---

🚀 Funcionalidades do MVP

1. Mapa com Pins

Exibe a localização de cada empresa.

Ao clicar em um pin, mostra nome, foto/logo e botão "Ver Loja".

Baseado em Leaflet.js (open-source) ou Google Maps API.



2. Lista de Lojas

Catálogo abaixo do mapa.

Filtros por categoria, cidade, palavras-chave.

Cards com imagem, descrição curta e link para página da loja.



3. Página da Loja

URL única (ex.: /loja/nome-empresa ou empresa.aloj.com.br).

Catálogo de produtos/serviços.

Contatos, horário de funcionamento, localização no mapa.



4. Cadastro de Empresas

Botão "Quero cadastrar minha empresa".

Formulário simples (nome, descrição, endereço, GPS, logo, fotos, categoria, plano).

Integração via API com o Painel ADM para provisionar subloja.



5. Integração com o Painel ADM

Ao receber um novo cadastro, envia dados para o ADM criar a subloja/app automaticamente.





---

🛠 Stack Tecnológica (MVP Público)

Frontend: Vue 3 + Quasar Framework (PWA ready)

Mapa: Leaflet.js (open-source, sem custo) ou Google Maps API (free tier)

Estilização: Tailwind CSS

Backend: Node.js + Express (ou integrado ao backend do ADM)

Banco de Dados: PostgreSQL (multi-tenant via ADM) ou JSON estático no MVP inicial

Hospedagem: Hostinger (frontend) + API no mesmo servidor ou VPS



---

📂 Estrutura de Pastas (MVP)

/aloj-public
 ├── /public         # Imagens, favicon, arquivos estáticos
 ├── /src
 │   ├── /assets     # Logos, ícones, estilos globais
 │   ├── /components # Componentes Vue (Map, StoreCard, etc.)
 │   ├── /pages      # Home, Loja, Cadastro
 │   ├── /services   # Funções para chamadas à API do ADM
 │   ├── App.vue     # App principal
 │   └── main.js     # Entrada da aplicação
 ├── package.json
 └── README.md


---

🔗 Integração com o ADM

Endpoint: POST /api/admin/tenants

Exemplo de payload:


{
  "name": "Loja Exemplo",
  "description": "Minha loja de roupas",
  "address": "Rua das Flores, 123 - Centro",
  "gps": { "lat": -23.55052, "lng": -46.633308 },
  "logo_url": "https://aloj.com.br/logos/loja123.png",
  "template_id": "basic-store"
}

Resposta do ADM:

{
  "tenant_id": "abc123",
  "status": "provisioning",
  "links": {
    "pwa": "https://loja123.aloj.com.br",
    "apk": "https://aloj.com.br/apks/loja123.apk"
  }
}


---

📌 Roadmap do MVP

[x] Estrutura do projeto Vue + Quasar

[x] Mapa com pins

[ ] Lista de lojas com busca/filtros

[ ] Página de loja

[ ] Formulário de cadastro com API

[ ] Integração ADM para provisionamento automático



---

📲 Versão AppSheet (atual)

O Aloj já existe em uma versão inicial criada com AppSheet para Android, funcionando como vitrine geolocalizada.
Essa versão está disponível para testes enquanto o novo MVP é desenvolvido.





---

📧 Contato

Email: contato@aloj.com.br

Site: https://aloj.com.br


