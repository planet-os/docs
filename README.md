## Planet OS Product Guide
Planet OS team is happy to collaborate with our Community on improving API and Platform documentation.
If you found a mistake, a missing detail or unclear statement, please, submit [an Issue](https://github.com/planet-os/docs/issues/new) or make a [Pull Request](https://help.github.com/articles/creating-a-pull-request/).
Planet OS developers are also using [Issues](https://github.com/planet-os/docs/issues) to work on upcoming API and Platform features, so Community can follow progress and see what's coming next.

### Planet OS Product Guide - Local Build Env
To build your local PlanetOS documentation server you need to 

1. clone this repo:
  ```
  git clone https://github.com/planet-os/docs
  ```

2. Have installed `bundler` (if you don't have it run `sudo gem install bundler`)
  ```shell
  # enter cloned repo e.g.
  cd docs

  # either run this to run locally
  bundler install
  bundler exec middleman server

  # OR run those commands within your vagrant
  vagrant up
  ```

3. Enjoy your Planet OS Product Guide server at http://localhost:4567.


---
This documentation project is based on [Slate](https://github.com/tripit/slate).
