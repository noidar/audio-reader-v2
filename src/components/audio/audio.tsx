import React, { Component } from 'react';
import { PeaksOptions, init, PeaksInstance } from 'peaks.js';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from "react-router";

import { AppAudioType } from '../../reducers/index.t';

type DispatchProps = {
}

type PathParamsType = {
  id: string,
}

type Props = DispatchProps & AppAudioType & RouteComponentProps<PathParamsType>;

class Audio extends Component<Props, any> {
  peaksInstance: PeaksInstance | null = null;
  canInitAudio: boolean = false;

  initAudio() {
    console.log('aaaaa', this.props.match.params.id);

    if (!this.canInitAudio || !this.props.url) {
      return;
    }

    const container: HTMLElement | null = document.querySelector('#peaks-container');
    const mediaElement: Element | null = document.querySelector('#peaks-audio');
    if (!container || !mediaElement) {
      throw new Error('cannot find container');
    }
    const options: PeaksOptions = {
      height: 100,
      keyboard: true,
      container,
      mediaElement,
      dataUri: {
        arraybuffer: '/first_ogg.dat'
      },
    };

    this.peaksInstance = init(options);
  }
  componentDidMount() {
    this.canInitAudio = true;
    this.initAudio();
  }

  render() {
    this.initAudio();

    let playerConfigs;
    if (this.props.url) {
      playerConfigs = (
        <>
          <audio id="peaks-audio" ref="audio_tag" src={this.props.url} />
          <div id='peaks-container'></div>
          <div className='row'>
            <div className='col-sm'>
              <button >Start/Stop</button>
            </div>
            <div className='col-sm'>
            </div>
          </div>
        </>
      )
    }

    return (
      <div id='music-container'>
        {playerConfigs}
      </div>
    )
  }
}
const mapStateToProps = (state: any): AppAudioType => ({ ...state.audio })

const mapDispatchToProps = {};

export default withRouter(
  connect<AppAudioType, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Audio))
