# Word Wrap Kata

## Instrucciones
Se trata, básicamente, de desarrollar el algoritmo que implementan muchos editores de texto como Notepad ++ o gedit, donde las líneas de texto que no caben en el ancho de la ventana se parten en más líneas más cortas para que el texto pueda leerse en el mismo ancho. Algunos editores llaman a esto "word wrap" o "text wrap", incluidos editores de código fuente.

## Ejemplos / Casos de uso
- wordWrap('',5) ⇒ ''
- wordWrap('hello',5) ⇒ 'hello'
- wordWrap('longword',4) ⇒ 'long\nword'
- wordWrap('reallylongword',4) ⇒ 'real\nlylo\nngwo\nrd'
- wordWrap('abc def',4) ⇒ 'abc\ndef'
- wordWrap('abc def ghi',4) ⇒ 'abc\ndef\nghi'
- wordWrap(' abcdf',4) ⇒ '\nabcd\nf'
- wordWrap(null,5) ⇒ ''
- wordWrap('hello',-5) ⇒ throw exception
