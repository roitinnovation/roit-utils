# ROIT Utils

### V1
- Normalize string method
- Create md5 hash (no dependencies)


### Usage
`npm install @roit/roit-utils`

- Creating md5 hash

```ts
import {md5} from '@roit/roit-utils'

md5('any_name')
// 13a55449ce38a9d14343d79fdbb8860b

```

- Normalizing strings
```ts
import {normalizeString} from '@roit/roit-utils'

normalizeString('são paulo') // default use Canonical Decomposition.  (remove all accents from string and normalize it)
//SAO PAULO

//also you can use an explicit type ("NFC" | "NFD" | "NFKC" | "NFKD")
normalizeString('any_text', 'NFC')
//check normalize method for details: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
```