# TIL - Today I Learn 12-11 18-11

## @alvarogfn

### Make System Under Test

- O nome vem de `Make System Under Test` (fazer sistema sob teste).
- Isso é usado em `Testes Unitários` para criar uma função que retorna uma `Instância da Classe ou Componente` que está sendo testado.
- Vocês devem encontrar exemplos disso com `Classes e Testes em Java`, eles preparam um `setup/Factory` para fazer `testes unitários`.
- A função `MakeSut` recebe `parâmetros` que podem ser usados para personalizar o comportamento ou a aparência do componente, e dentro dessa função você cria a lógica de renderização do componente no contexto dos testes, reutilizando a função entre vários testes para não precisar reescrever o código de setup em cada teste.

```ts
// Uma função que vai retornar a renderização do seu teste toda vez que for chamada
const makeSut = ({
    prop = false, // Aqui você seta algum parametro padrão para todos os testes. É útil quando alguma prop é obrigatória
  ...props
}:  Partial<TProps>)  =>  {
  // Aqui fica a lógica de renderização do componente. Pode ser qualquer uma.
  return render(<Component prop={prop} {...props} />);
};

describe('Component',  ()  =>  {
    describe('when',  ()  =>  {
      it('do',  ()  =>  {
        // Você pode modificar os parâmetros para adaptar a renderização do componente
      makeSut({ prop:  false  });
    });
});
```

## @nicolettifps

## ThreeJs

Primeiramente essa semana dei uma pegada no **ThreeJs**. A parte interessante aqui é que ele também está sendo muito usado no **Electron** [Aqui tem um Get Started](https://medium.com/@sharadghimire5551/getting-started-with-three-js-and-electron-js-9ae49b1d3f59) que eu tava dando uma lida.

## Git

- Também dei uma avançada no de **Git** Essa semana dei uma olhada pra alguns _Rewriting history_ que são bem uteis, principalmente pra mim que envio commit errado toda hora.

- **Changing the Last Commit:** `git commit --amend` O amend pode ser usado para 'Editar' seu último commit enviado sem precisar enviar um novo. Ele também serve caso queira apenas trocar o comentário do commit. Mas vale uma atenção especial já que o `--amend` não apenas 'editará' o commit antigo, e sim substituirá o antigo por um novo, trocando assim suas hashs já que o git tem a ideia de ser imutável. `git commit --amend -m 'an updated commit message'` [Aqui deixo um dos materiais de referencia](<https://www.atlassian.com/git/tutorials/rewriting-history>](<https://www.atlassian.com/git/tutorials/rewriting-history> '<https://www.atlassian.com/git/tutorials/rewriting-history\>") ) caso queiram entender mais afundo.

## @aalmeida00

## variaveis scss

Se importar o arquivo que possui as variáveis scss dessa forma `@use '../../styles/global' as *;` Voce nao precisa usar o prefixo `global.$varname`, é só chamar `$varname` evitando a repetição desnecessária.

## @zoldyzdk

## Error Boundary

`Error boundary` é um componente especial, utilizado na captura de erros gerados durante a renderização da sua aplicação.

Com ele você consegue por exemplo renderizar uma UI específica para quando houver um erro na aplicação, também pode capturar esses erros para um sistema de log.

Uma curiosidade sobre o componente é que apesar do `React` atualmente usar `Function Component` por padrão ele só pode ser escrito como um `Class Component`.

Exemplo de um `Error Boundary Component`:

```ts
class ErrorBoundary extends React.Component {  
    constructor(props) {  
      super(props);  
    this.state = { hasError: false };  
  }  
  static getDerivedStateFromError(error) {  
      return { hasError: true };  
  }  
  componentDidCatch(error, info) {  
      logErrorToMyService(error, info.componentStack);  
  }  
  render() {  
      if (this.state.hasError) {  
      return this.props.fallback;  
    }  
    return this.props.children;  
  }  
}
```
