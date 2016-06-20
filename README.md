## Planet OS Product Guide
Planet OS team is happy to collaborate with our Community on improving API and Platform documentation.
If you found a mistake, a missing detail or unclear statement, please, submit [an Issue](https://github.com/planet-os/docs/issues/new) or make a [Pull Request](https://help.github.com/articles/creating-a-pull-request/).
Planet OS developers are also using [Issues](https://github.com/planet-os/docs/issues) to work on upcoming API and Platform features, so Community can follow progress and see what's coming next.

### Getting Local Build Env
If you don't have `bundler` ruby gem installed, run `sudo gem install bundler`

```shell
# either run this to run locally

bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567.


---
This documentation project is based on [Slate](https://github.com/tripit/slate).