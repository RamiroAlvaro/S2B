# S2B-POOL

Sistema de carpooling do S2B.

[![Code Health](https://landscape.io/github/RamiroAlvaro/S2B-Pedro-Ramiro/master/landscape.svg?style=flat)](https://landscape.io/github/RamiroAlvaro/S2B-Pedro-Ramiro/master)

## Como desenvolver?
 
1. Clone o repositório.
2. Crie um virtualenv com Python 3.6.0
3. Ative o virtualenv.
4. Instale as dependências.
5. Configure a instância com o .env

```console
git clone git@github.com:RamiroAlvaro/s2b.git s2b
cd s2b
python -m venv .s2b
source .s2b/bin/activate
pip install -r requirements.txt
cp contrib/env-sample .env
```