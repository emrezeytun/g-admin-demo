import React, { useEffect, useState } from 'react';
import {
  InformationBox,
  Input,
  Selectbox,
  Switch,
  Textarea,
  Button,
} from '@components';
import './Workflow.scss';
import { Information, Success, Error } from '@icons';
import {
  getUsers as getUserService,
  sendPost as sendPostService,
} from '@services/managementService';

export default function Workflow() {
  const [isInformationBoxOpen, setIsInformationBoxOpen] = useState(true);
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const [informationBoxProps, setInformationBoxProps] = useState({
    type: 'info',
    icon: Information,
    title: 'New updates:',
    description: 'Restart to get the latest updates.',
  });
  const [form, setForm] = useState({
    title: '',
    userId: '',
    body: '',
  });
  const [users, setUsers] = useState([]);

  const onChangeForm = (formKey, val) => {
    console.log('keee', formKey, val);
    setForm({ ...form, [formKey]: val });
  };

  const getUsers = async () => {
    const { status, data } = await getUserService();

    if (status === 200) {
      setUsers(
        data.map((i) => {
          return {
            id: i.id,
            name: i.name,
          };
        })
      );
    }
  };

  const sendPost = async () => {
    const payload = { ...form };
    if (!isSwitchActive) delete payload.body;
    const { status } = await sendPostService(payload);
    if (status === 201) {
      setInformationBoxProps({
        type: 'success',
        icon: Success,
        title: 'Successful:',
        description: 'The form has been submitted.',
      });
      setForm({
        title: '',
        userId: '',
        body: '',
      });
    } else {
      setInformationBoxProps({
        type: 'error',
        icon: Error,
        title: 'Error:',
        description: 'There is an error.',
      });
    }
    setIsInformationBoxOpen(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="workflow-main">
      <div className="workflow-main-informatin-box">
        {isInformationBoxOpen ? (
          <InformationBox
            isInformationBoxOpen={isInformationBoxOpen}
            setIsInformationBoxOpen={setIsInformationBoxOpen}
            type={informationBoxProps.type}
            icon={informationBoxProps.icon}
            title={informationBoxProps.title}
            description={informationBoxProps.description}
          />
        ) : (
          ''
        )}
      </div>
      <div className="workflow-main-forms">
        <div className="workflow-main-forms-items">
          <div className="item">
            <Input
              width="100%"
              placeholder="Enter a Title"
              label="Title"
              defaultValue={form.title}
              onChangeForm={(formKey, val) => onChangeForm(formKey, val)}
              formKey="title"
            />
          </div>

          <div className="item">
            <Selectbox
              width="100%"
              placeholder="Select user"
              label="User"
              defaultValue={form.userId}
              onChangeForm={(formKey, val) => onChangeForm(formKey, val)}
              formKey="userId"
              selectboxData={users}
            />
          </div>
        </div>

        <div className="workflow-main-forms-items">
          <div className="item-switch">
            <span className="item-switch-label">Active switch:</span>
            <Switch
              isSwitchActive={isSwitchActive}
              setIsSwitchActive={setIsSwitchActive}
            />
          </div>
        </div>

        {isSwitchActive ? (
          <div className="workflow-main-forms-items textarea">
            <div className="item">
              <Textarea
                width="100%"
                placeholder="Enter a body"
                defaultValue={form.body}
                label="Body"
                onChangeForm={(formKey, val) => onChangeForm(formKey, val)}
                formKey="body"
              />
            </div>
          </div>
        ) : (
          ''
        )}

        <div className="workflow-main-forms-buttons">
          <Button sendPost={sendPost} name="Accept" type="primary" />
          <Button name="Cancel" type="ghost" />
        </div>
      </div>
    </div>
  );
}
