{
            console.log(response.data)
            that.setState({PicUrl: ''})
            console.log(that.state.PicUrl)
            that.setState({PicUrl: response.data.images[0].uri_oembed})
            console.log(that.state.PicUrl)
            

          .get(that.state.PicUrl, config)

            axios
              .post("/event", {
              description: that.state.description,
              endDate: that.state.endDate._d,
              startDate: that.state.startDate._d,
              attendees: that.state.attendees,
              title: that.state.title,
              address: that.state.address,
              lat: that.state.lat,
              lng: that.state.lng,
              PicUrl: that.state.PicUrl,
              isShown: true
            })
              .then((response) => {
                console.log(response.data)
                that
                  .props
                  .createEvent(response.data);
                that.setState({
                  title: "",
                  description: "",
                  endDate: moment(),
                  attendees: 0,
                  picture: "",
                  startDate: moment(),
                  address: '',
                  lat: 0,
                  lng: 0,
                  PicUrl: "",
                  isShown: true
                })
              })
              .catch(function (error) {
                console.log(error);
              });

          }