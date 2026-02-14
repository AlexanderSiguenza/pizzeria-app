This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. El Estado Principal (En Page.js)
<p>Todo nace en la variable <code>ordenes</code>. Es un array (lista) que vive en el componente padre. Si este array cambia, React actualiza la pantalla.</p>
<p>El componente <code>PizzaForm</code> tiene su propio estado interno para controlar los inputs. Al dar click en "Agregar", no guarda la pizza él mismo, sino que llama a una función que le prestó el padre: <code>agregarOrden()</code>.</p>     
<p>Cuando se ejecuta <code>agregarOrden(nuevaPizza)</code>, el padre recibe los datos y usa <code>setOrdenes([...anteriores, nueva])</code>. El <strong>Spread Operator (...)</strong> es vital aquí para no borrar lo que ya teníamos.</p> 
<p>Como el estado <code>ordenes</code> cambió, React vuelve a pintar la lista usando <code>.map()</code>. Cada pizza se convierte en un componente <code>PizzaItem</code>.</p>
    
