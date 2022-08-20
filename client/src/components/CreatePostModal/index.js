import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createPost, hideModal } from '../../redux/actions';
import { useState } from 'react';

export default function CreatePostModal() {
  const [data, setData] = React.useState({
    title: '',
    content: '',
    attachment: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const [NameError, setNameError] = useState(false);
  const [ContentError, setContentError] = useState(false);
  const [ImgError, setImgError] = useState(false);

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    if(data.title === ''){
      setNameError(true);
    }
    else if(data.content === ''){
      setContentError(true);
    }
    else if(data.attachment === ''){
      setImgError(true);
    }
    else{
      dispatch(createPost.createPostRequest(data));
      onClose();
    }
  }, [data, dispatch, onClose]);

  const NameErrorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: NameError ? '' : 'none',
        }}>
        <h3>LỖI: Thiếu tên sản phẩm</h3>
      </div>
    );
  };

  const ContentErrorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: ContentError ? '' : 'none',
        }}>
        <h3>LỖI: Thiếu thông tin sản phẩm</h3>
      </div>
    );
  };

  const ImgErrorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: ImgError ? '' : 'none',
        }}>
        <h3>LỖI: Thiếu ảnh</h3>
      </div>
    );
  };

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Thêm sản phẩm</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Tên sản phẩm'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          required
          placeholder='Thông tin sản phẩm'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept='image/*'
          required
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className="messages">
          {NameErrorMessage()} 
          {ContentErrorMessage()}
          {ImgErrorMessage()}
        </div>
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Thêm
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
