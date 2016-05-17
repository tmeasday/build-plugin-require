import aws from 'aws-sdk';
console.log(`aws exists! ${!!aws}`);

Plugin.registerCompiler({
  extensions: ['foo']
}, () => new FooCompiler());

class FooCompiler {

}
