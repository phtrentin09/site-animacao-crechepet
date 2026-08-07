# Guia de manutenção do site — Animação Creche Pet e Hotel

Este guia é pra você (Pedro) conseguir fazer pequenos ajustes no site sozinho, sem precisar de terminal, Git ou conhecimento técnico. Tudo aqui usa só um editor de texto simples e o navegador.

## 1. Estrutura da pasta

Não mexa nos nomes desses arquivos — outras páginas dependem deles:

```
site-animacao/
  index.html              (Início)
  sobre.html
  servicos.html
  galeria.html
  trabalhe-conosco.html
  blog.html                (lista de posts)
  blog-primeiro-dia-creche.html
  blog-vacinas-vermifugo-antipulgas.html
  blog-sinais-pouca-energia.html
  contato.html
  styles.css                (visual do site inteiro)
  main.js                   (funcionalidade do menu e formulários)
  img/                       (todas as fotos)
```

Regra de ouro: **nunca renomeie `styles.css`, `main.js` ou a pasta `img`** — se fizer isso, o site quebra (perde estilo, menu para de funcionar, fotos somem).

## 2. Como editar um texto

1. Clique com o botão direito no arquivo `.html` que quer editar (ex: `sobre.html`).
2. Escolha "Abrir com" → Bloco de Notas (Windows) ou TextEdit (Mac, mas aí abra como texto simples).
3. Use Ctrl+F pra procurar o trecho de texto que aparece no site (ex: procure "A Animação chegou recentemente").
4. Edite só o texto que fica **entre as tags** (as coisas tipo `<p>` e `</p>`) — não apague as tags em si.
5. Salve o arquivo (Ctrl+S) e feche.
6. Abra o `index.html` no navegador pra conferir se ficou certo antes de publicar.

Dica: um editor como o [VS Code](https://code.visualstudio.com/) (gratuito) ou o [Notepad++](https://notepad-plus-plus.org/) facilita bem mais que o Bloco de Notas puro, porque colore o código e você enxerga melhor onde é texto e onde é código.

## 3. Como trocar uma foto

**Opção mais simples:** pegue a nova foto, renomeie ela com o **mesmo nome exato** de uma foto que já está na pasta `img/`, e substitua o arquivo. O site atualiza sozinho, sem precisar editar nenhum HTML.

**Opção alternativa:** coloque a foto nova na pasta `img/` com qualquer nome (evite acentos e espaços — use `foto-hospedagem.jpg`, por exemplo). Depois abra o arquivo HTML da página onde ela deve aparecer, procure por `<img src="img/...">` e troque o nome do arquivo dentro das aspas.

## 4. Como adicionar fotos reais na galeria

Abra `galeria.html`. Você vai ver 9 blocos assim:

```html
<div class="gallery-tile"><svg ...></svg><span>Área de brincadeira</span></div>
```

Pra trocar por uma foto real, substitua o bloco inteiro por:

```html
<div class="gallery-tile has-photo photo-frame">
  <img src="img/area-de-brincadeira.jpg" alt="Área de brincadeira" loading="lazy">
</div>
```

Troque `img/area-de-brincadeira.jpg` pelo nome real do arquivo que você colocou na pasta `img/`.

## 5. Como adicionar um novo post no blog

1. Copie um dos arquivos existentes, por exemplo `blog-sinais-pouca-energia.html`, e cole na mesma pasta com um novo nome (ex: `blog-cuidados-no-verao.html`).
2. Abra o arquivo novo e troque: o `<title>`, a `<meta name="description">`, o texto do `eyebrow` (categoria), o `<h1>`, a foto e os parágrafos do artigo.
3. Abra `blog.html` e duplique um dos cards (`<div class="blog-card">...</div>`), colando um novo com o título, resumo e o link (`href="blog-cuidados-no-verao.html"`) do post novo.

## 6. Como publicar as mudanças

Como você está usando o **Vercel Drop** (sem Git), o processo é:

1. Termine todas as edições e confira localmente abrindo o `index.html` no navegador.
2. Vá em [vercel.com/drop](https://vercel.com/drop), logado na sua conta.
3. Arraste a pasta `site-animacao` inteira (com tudo dentro, incluindo `img/`) pro navegador.
4. Em segundos, sai um link novo com a versão atualizada.

Lembre-se: cada vez que você arrasta a pasta, o Vercel Drop cria um **link novo** — não é o mesmo endereço de antes. Pra manter sempre o mesmo link, o ideal é já estar na hospedagem definitiva (domínio próprio), onde atualizar é só subir os arquivos por cima, sem trocar de endereço.

## 7. Se algo quebrar

Se depois de uma edição o site parar de funcionar (ficar sem estilo, menu não abrir, foto não aparecer), o motivo quase sempre é um desses:

- Uma tag HTML foi apagada sem querer (procure por `<` ou `>` sozinhos no meio do texto).
- O nome de um arquivo de imagem no `img/` não bate exatamente com o que está escrito no `src="img/..."` do HTML (maiúscula/minúscula importa).
- `styles.css` ou `main.js` foram renomeados ou movidos de pasta.

Se travar em algo, me chama de novo com o arquivo que você editou que eu reviso rapidinho.
